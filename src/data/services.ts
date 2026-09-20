import type { Service } from '../types';

export const services: Service[] = [
  {
    slug: 'ai-automation',
    name: 'AI Automation',
    shortName: 'AI Automation',
    tagline: 'Replace manual handoffs with governed, measurable automation.',
    summary:
      'Codeaxes designs and ships AI automation that connects your existing tools, documents, and customer workflows, so teams spend less time copying data and more time on decisions that require judgment.',
    heroEyebrow: 'AI Automation',
    heroTitle: 'Automate the work that slows your operators down.',
    heroBody:
      'We map how work actually moves through your organization, then build assistants, integrations, and document pipelines that reduce cycle time without sacrificing auditability or control.',
    explanation:
      'Effective automation starts with operational clarity, not model selection. Codeaxes begins by documenting triggers, data sources, approval paths, and failure modes in your current process. From there we implement workflow automation, retrieval-augmented knowledge search, and task-specific AI assistants wired into the systems your team already uses. Every integration is instrumented so you can see throughput, error rates, and human override points, not just demo-day magic.',
    problems: [
      'Support and operations teams re-type the same customer context across CRM, billing, and ticketing tools.',
      'Internal knowledge lives in scattered docs, wikis, and Slack threads that new hires cannot search reliably.',
      'Document intake, contracts, invoices, intake forms, requires manual review before anything enters downstream systems.',
      'AI experiments stall because no one owns data quality, guardrails, or production monitoring.',
      'Customer-facing automation feels brittle: wrong answers erode trust faster than slow human responses.',
      'Integration backlogs grow while business units buy point solutions that never connect.',
    ],
    capabilities: [
      {
        title: 'Automation strategy and roadmap',
        body: 'We prioritize automations by operational impact, data readiness, and compliance constraints, so the first release removes real friction instead of adding another dashboard.',
      },
      {
        title: 'Workflow automation',
        body: 'Event-driven pipelines connect CRM, ERP, support, and internal tools with explicit states, retries, and escalation paths when automation should hand off to a person.',
      },
      {
        title: 'AI assistants for internal teams',
        body: 'Role-aware assistants answer process questions, draft responses, and surface relevant records, grounded in your policies and knowledge base, not the open internet.',
      },
      {
        title: 'Internal knowledge search',
        body: 'We index approved documentation and ticket history into retrieval systems that cite sources, respect permissions, and stay current as content changes.',
      },
      {
        title: 'Document processing pipelines',
        body: 'Structured extraction from PDFs, forms, and attachments feeds validation queues and downstream APIs with human review where accuracy is non-negotiable.',
      },
      {
        title: 'CRM and support automation',
        body: 'Triage, enrichment, routing, and suggested replies reduce handle time while keeping agents in control of customer-facing messages.',
      },
    ],
    deliverables: [
      'Current-state workflow map with automation candidates ranked by ROI and risk',
      'Integration architecture connecting source systems, queues, and observability',
      'Production AI assistant or agent with role-based access and audit logging',
      'Document intake pipeline with extraction schemas and review workflows',
      'Monitoring dashboards for latency, failure rates, and human override volume',
      'Runbooks for retraining, prompt updates, and incident response',
    ],
    process: [
      {
        title: 'Process discovery',
        body: 'We shadow operators, interview stakeholders, and inventory systems to understand where time is lost and where automation would create liability.',
      },
      {
        title: 'Data and guardrail design',
        body: 'Access boundaries, retention rules, and evaluation datasets are defined before any model is wired into customer or financial workflows.',
      },
      {
        title: 'Integration build',
        body: 'Connectors, webhooks, and queue workers are implemented with idempotency and replay so partial failures do not corrupt records.',
      },
      {
        title: 'Pilot with measurement',
        body: 'A bounded production pilot tracks cycle time, accuracy, and escalation rates against baselines captured during discovery.',
      },
      {
        title: 'Scale and govern',
        body: 'We expand coverage, document change control, and train your team to monitor drift, update knowledge sources, and extend automations safely.',
      },
    ],
    industries: [
      'SaaS',
      'Healthcare',
      'Fintech',
      'Ecommerce',
      'Logistics',
      'Education',
      'Media',
    ],
    stack: [
      'Python',
      'Node.js',
      'OpenAI',
      'LangChain',
      'PostgreSQL',
      'Redis',
      'vector databases',
      'AWS',
    ],
    useCases: [
      {
        title: 'Support ticket triage and enrichment',
        body: 'Incoming tickets are classified, linked to account history, and routed with suggested context so agents start every conversation informed.',
      },
      {
        title: 'Policy-aware internal copilot',
        body: 'Operations staff query procedures and past resolutions with cited answers drawn from approved documentation, not outdated wiki pages.',
      },
      {
        title: 'Contract and invoice extraction',
        body: 'Uploaded documents populate CRM and billing fields after schema validation, with exceptions queued for human approval.',
      },
      {
        title: 'Cross-system customer onboarding',
        body: 'Signup events trigger provisioning, welcome sequences, and CRM updates without manual copy-paste between SaaS tools.',
      },
    ],
    benefits: [
      'Shorter cycle times on repetitive operational work',
      'Consistent handling of documents and customer records',
      'Searchable institutional knowledge with source attribution',
      'Automation you can audit, pause, and roll back',
      'Integrations that survive team turnover and vendor changes',
    ],
    relatedCaseStudies: [
      'northline-analytics',
      'careloop-portal',
      'ledgerkit-onboarding',
      'routewise-control',
    ],
    faqs: [
      {
        question: 'Do you replace our existing CRM or helpdesk?',
        answer:
          'No. We integrate with the systems you already operate, Salesforce, HubSpot, Zendesk, Intercom, and custom internal tools, so automation augments your stack instead of forcing a migration.',
      },
      {
        question: 'How do you prevent AI from giving wrong answers to customers?',
        answer:
          'We ground responses in approved sources, enforce role-based retrieval, log outputs, and design human approval steps wherever incorrect automation would carry financial or compliance risk.',
      },
      {
        question: 'What data do you need before building document automation?',
        answer:
          'Representative samples of your documents, the fields downstream systems require, and examples of edge cases your team currently handles manually. We use these to design extraction schemas and review queues.',
      },
      {
        question: 'Can automation run entirely on our infrastructure?',
        answer:
          'Yes. Depending on your security requirements, workloads can run in your cloud tenant with private networking, secrets management, and your existing identity provider.',
      },
    ],
    visual: 'workflow',
  },
  {
    slug: 'mobile-apps',
    name: 'Mobile App Development',
    shortName: 'Mobile Apps',
    tagline: 'Native performance and cross-platform speed, chosen deliberately.',
    summary:
      'Codeaxes builds iOS and Android applications, from greenfield products to modernization of legacy apps, with UX strategy, reliable releases, and analytics that inform iteration after launch.',
    heroEyebrow: 'Mobile Apps',
    heroTitle: 'Ship mobile products people open every day.',
    heroBody:
      'We combine platform-native craftsmanship with pragmatic cross-platform choices, so your app feels fast, trustworthy, and maintainable long after the first App Store submission.',
    explanation:
      'Mobile products fail when teams treat the app as a shrunken website. Codeaxes starts with the jobs users perform away from a desk, capture, approve, track, communicate, and designs flows that respect offline moments, permissions, and platform conventions. Whether the right fit is Swift and Kotlin or Flutter and React Native, we engineer for testability, crash visibility, and store compliance from sprint one.',
    problems: [
      'An existing app scores poorly in reviews because navigation and performance feel dated.',
      'Product and engineering disagree on whether to go native or cross-platform.',
      'Release cadence is blocked by manual QA and opaque crash reports.',
      'Analytics exist but no one connects retention drops to specific feature changes.',
      'Backend APIs were built for web clients and break under mobile connectivity patterns.',
      'App Store and Play Store rejections delay launches because compliance was an afterthought.',
    ],
    capabilities: [
      {
        title: 'iOS and Android native development',
        body: 'Swift and Kotlin implementations when platform APIs, performance, or hardware access justify separate codebases.',
      },
      {
        title: 'Flutter and React Native',
        body: 'Shared UI and business logic for teams that need one engineering stream without sacrificing polish on either store.',
      },
      {
        title: 'UX strategy for mobile contexts',
        body: 'Journey mapping, gesture patterns, and offline-first flows shaped around real usage environments, not desktop wireframes resized.',
      },
      {
        title: 'App modernization',
        body: 'Incremental refactors, dependency upgrades, and architecture changes that keep shipping features while retiring technical debt.',
      },
      {
        title: 'App Store and Play deployment',
        body: 'Signing, provisioning, release trains, staged rollouts, and store listing assets managed as part of delivery, not a launch-week scramble.',
      },
      {
        title: 'Analytics and maintenance',
        body: 'Event schemas, funnel instrumentation, crash monitoring, and post-launch iteration tied to measurable product outcomes.',
      },
    ],
    deliverables: [
      'Platform recommendation memo with trade-offs documented for stakeholders',
      'Interactive prototypes validated with target users before engineering lock-in',
      'Production iOS and/or Android builds with automated CI pipelines',
      'App Store and Google Play release configuration and submission support',
      'Analytics event plan aligned to product KPIs',
      'Maintenance playbook covering OS updates, dependency patches, and hotfix process',
    ],
    process: [
      {
        title: 'Mobile product framing',
        body: 'We define the core jobs-to-be-done, connectivity assumptions, and success metrics before selecting frameworks or drawing screens.',
      },
      {
        title: 'Experience design',
        body: 'Flows, components, and accessibility patterns are prototyped and tested on device, not only in Figma, so ergonomics and load states are validated early.',
      },
      {
        title: 'Engineering sprints',
        body: 'Feature work ships behind feature flags with unit and integration tests, API contracts, and crash reporting wired from the first build.',
      },
      {
        title: 'Device and store validation',
        body: 'Real-device QA, performance profiling, and store guideline checks happen continuously, not in a single pre-launch marathon.',
      },
      {
        title: 'Launch and iteration',
        body: 'Staged releases, analytics review, and backlog grooming turn store feedback and retention data into prioritized improvements.',
      },
    ],
    industries: [
      'Healthcare',
      'Fintech',
      'Ecommerce',
      'Logistics',
      'Education',
      'Real estate',
      'Media',
    ],
    stack: [
      'Swift',
      'Kotlin',
      'Flutter',
      'React Native',
      'TypeScript',
      'Node.js',
      'AWS',
      'Appium',
    ],
    useCases: [
      {
        title: 'Field service companion app',
        body: 'Technicians capture job status, photos, and signatures offline, syncing when connectivity returns without duplicate submissions.',
      },
      {
        title: 'Consumer fintech wallet',
        body: 'Biometric login, transaction history, and push alerts built to platform security guidelines with fraud-sensitive flows reviewed early.',
      },
      {
        title: 'Retail loyalty and reorder',
        body: 'Personalized offers and one-tap reordering connected to inventory and fulfillment APIs with analytics on conversion by cohort.',
      },
      {
        title: 'Learning app with offline content',
        body: 'Course modules download for commute-friendly study sessions, with progress synced across phone and tablet.',
      },
    ],
    benefits: [
      'Platform choice driven by product constraints, not vendor preference',
      'Store-ready releases with observability from day one',
      'UX that respects mobile context instead of mirroring desktop',
      'Analytics tied to retention and feature adoption',
      'A maintainable codebase your team can extend after handoff',
    ],
    relatedCaseStudies: ['careloop-portal', 'ledgerkit-onboarding', 'harbor-commerce', 'lumen-learn'],
    faqs: [
      {
        question: 'Should we build native or cross-platform?',
        answer:
          'It depends on hardware access, performance targets, team skills, and release cadence. We document the trade-offs for your specific product and recommend a path before writing production code.',
      },
      {
        question: 'Do you handle App Store and Play Store submissions?',
        answer:
          'Yes. We configure signing, manage release tracks, prepare metadata, and work through rejection feedback so launches are not blocked by procedural issues.',
      },
      {
        question: 'Can you modernize an app we already have in market?',
        answer:
          'Absolutely. We audit crash data, dependencies, and user reviews, then propose incremental modernization that keeps the app shippable while improving architecture and UX.',
      },
      {
        question: 'How do you test across devices?',
        answer:
          'Automated suites on simulators and emulators plus targeted real-device testing for gestures, permissions, push notifications, and performance on representative hardware.',
      },
    ],
    visual: 'devices',
  },
  {
    slug: 'saas-development',
    name: 'SaaS Development',
    shortName: 'SaaS',
    tagline: 'Multi-tenant platforms built to earn and retain subscription revenue.',
    summary:
      'Codeaxes engineers SaaS products with tenant isolation, role-based access, billing integration, and dashboards operators actually use, from MVP validation through scale-ready architecture.',
    heroEyebrow: 'SaaS Development',
    heroTitle: 'Build the subscription product your market will pay for.',
    heroBody:
      'We design multi-tenant architecture, billing flows, and admin experiences so your team can ship features, onboard customers, and grow MRR without re-architecting every quarter.',
    explanation:
      'SaaS is more than a web app with a login screen. Codeaxes implements the operational substrate, organizations, roles, plans, usage metering, webhooks, and audit trails, that lets you sell confidently and support enterprise buyers. Dashboards are built around the decisions your customers make daily, not generic chart widgets. We favor iterative delivery: a credible MVP in market, then hardening for security, integrations, and scale as traction proves which capabilities matter.',
    problems: [
      'Early architecture treats every customer as a separate deployment, blocking efficient growth.',
      'Billing logic is bolted on late, causing invoice mismatches and painful migrations.',
      'Admin and end-user experiences share one confused navigation model.',
      'Enterprise prospects ask for SSO, audit logs, and SLAs your MVP cannot demonstrate.',
      'Integrations are one-off scripts instead of a documented, versioned API surface.',
      'Feature velocity drops because the team fears breaking tenant data isolation.',
    ],
    capabilities: [
      {
        title: 'Multi-tenant platform architecture',
        body: 'Tenant boundaries, data partitioning strategies, and configuration models that keep customers isolated without multiplying infrastructure cost linearly.',
      },
      {
        title: 'Subscriptions and billing',
        body: 'Plan tiers, trials, seat-based pricing, and payment provider integration with webhooks that keep entitlements synchronized.',
      },
      {
        title: 'Dashboards and reporting',
        body: 'Role-specific views that surface the metrics each persona needs, operators, managers, and executives, without overwhelming new users.',
      },
      {
        title: 'User roles and permissions',
        body: 'Granular access control, invitation flows, and admin tooling so customers can govern their own organizations safely.',
      },
      {
        title: 'Integrations and webhooks',
        body: 'Outbound events and REST APIs that partners and customers can adopt, with versioning, rate limits, and clear error contracts.',
      },
      {
        title: 'Scalability and security',
        body: 'Load testing, encryption, secrets management, and observability practices that stand up to security questionnaires and traffic spikes.',
      },
    ],
    deliverables: [
      'Tenant and identity model with documented isolation guarantees',
      'Customer-facing application with onboarding and core workflow complete',
      'Admin console for user, plan, and usage management',
      'Billing integration with entitlement sync and dunning handling',
      'Public API or webhook catalog with authentication patterns',
      'Infrastructure-as-code templates and deployment runbooks',
    ],
    process: [
      {
        title: 'Commercial model alignment',
        body: 'We translate pricing, packaging, and buyer personas into technical requirements for plans, limits, and admin capabilities.',
      },
      {
        title: 'Tenant foundation',
        body: 'Authentication, organizations, roles, and audit logging are implemented before feature sprawl makes retrofits expensive.',
      },
      {
        title: 'MVP feature delivery',
        body: 'Core workflows ship in vertical slices, each releasable, so early customers provide feedback on value, not vaporware demos.',
      },
      {
        title: 'Billing and integrations',
        body: 'Payment flows, usage tracking, and third-party connectors are hardened once the product narrative is validated in market.',
      },
      {
        title: 'Scale hardening',
        body: 'Performance testing, security review, and operational dashboards prepare the platform for larger tenants and higher concurrency.',
      },
    ],
    industries: [
      'SaaS',
      'Healthcare',
      'Fintech',
      'Ecommerce',
      'Education',
      'Logistics',
      'Manufacturing',
    ],
    stack: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'NestJS',
      'PostgreSQL',
      'Redis',
      'AWS',
    ],
    useCases: [
      {
        title: 'Vertical SaaS for regulated industries',
        body: 'Role-based workflows, audit trails, and export tooling built for buyers who scrutinize compliance before signing annual contracts.',
      },
      {
        title: 'Usage-metered API product',
        body: 'Metering, plan enforcement, and customer-facing usage dashboards so billing matches consumption without manual reconciliation.',
      },
      {
        title: 'Collaborative B2B workspace',
        body: 'Multi-organization tenancy with invitations, shared resources, and notification preferences that respect each customer\'s structure.',
      },
      {
        title: 'MVP to Series A platform',
        body: 'Start with a focused MVP, then extend admin tooling, SSO, and integrations as sales motion matures, without rewriting the core.',
      },
    ],
    benefits: [
      'Architecture that supports many customers on one codebase',
      'Billing and entitlements that stay synchronized with product access',
      'Admin experiences that reduce your support load',
      'APIs and integrations enterprise buyers expect',
      'A path from MVP to scale without throwaway prototypes',
    ],
    relatedCaseStudies: ['northline-analytics', 'careloop-portal', 'ledgerkit-onboarding', 'lumen-learn'],
    faqs: [
      {
        question: 'How do you approach multi-tenancy, shared database or isolated?',
        answer:
          'We choose a model based on your compliance requirements, customer size, and operational cost. Options are documented with migration implications before implementation begins.',
      },
      {
        question: 'Can you integrate with Stripe or other billing providers?',
        answer:
          'Yes. We implement checkout, subscription lifecycle events, and webhook handlers so plan changes immediately reflect in product access.',
      },
      {
        question: 'What does a SaaS MVP include?',
        answer:
          'Authentication, tenant setup, the core workflow that delivers your value proposition, basic admin controls, and instrumentation to measure activation, not every enterprise feature on day one.',
      },
      {
        question: 'Do you help with SOC 2 or security questionnaire prep?',
        answer:
          'We engineer audit logs, access controls, encryption, and deployment practices that align with common security frameworks. Formal certification remains your compliance program, but the product will not be the blocker.',
      },
    ],
    visual: 'dashboard',
  },
  {
    slug: 'paas-development',
    name: 'PaaS Development',
    shortName: 'PaaS',
    tagline: 'Platforms that other builders deploy on, with confidence.',
    summary:
      'Codeaxes designs and builds platform-as-a-service products: developer portals, APIs, tenant isolation, and cloud infrastructure that let your customers ship software on top of your foundation.',
    heroEyebrow: 'PaaS Development',
    heroTitle: 'Give developers a platform worth building on.',
    heroBody:
      'We engineer the control plane, APIs, and isolation boundaries your platform needs, so third-party builders integrate quickly while you maintain security, uptime, and operational visibility.',
    explanation:
      'A PaaS is an product whose users are engineers. Codeaxes treats developer experience as a first-class requirement: clear authentication, sandbox environments, rate limits that fail gracefully, and documentation generated from the same schemas that power the API. Underneath, we implement tenant isolation, resource quotas, and deployment pipelines that scale with customer adoption. Monitoring and incident response are designed for platforms where one customer\'s misconfiguration must not compromise another\'s workloads.',
    problems: [
      'APIs grew organically without versioning, breaking integrators on every release.',
      'Customers share infrastructure in ways that create noisy-neighbor performance issues.',
      'There is no self-service portal, every onboarding requires your engineering team.',
      'Deployment automation works for internal apps but not for customer workloads.',
      'Security reviews stall deals because isolation and logging stories are unclear.',
      'Platform teams spend more time on tickets than on extensibility and reliability.',
    ],
    capabilities: [
      {
        title: 'Platform architecture',
        body: 'Control planes, data planes, and extension points designed for multi-customer workloads with clear blast-radius boundaries.',
      },
      {
        title: 'Developer portals',
        body: 'Self-service signup, API keys, usage views, and documentation that reduce onboarding friction and support burden.',
      },
      {
        title: 'API design and lifecycle',
        body: 'Versioned REST or GraphQL surfaces with consistent error models, pagination, and changelogs integrators can trust.',
      },
      {
        title: 'Cloud infrastructure',
        body: 'Infrastructure-as-code on AWS, Google Cloud, or Azure with environments that mirror production behavior.',
      },
      {
        title: 'Tenant isolation',
        body: 'Network, identity, and resource boundaries enforced at the platform layer, not left to each customer to configure correctly.',
      },
      {
        title: 'Monitoring and secure deployment',
        body: 'Metrics, tracing, and deployment pipelines with rollback, canary releases, and secrets management suitable for regulated buyers.',
      },
    ],
    deliverables: [
      'Platform reference architecture with isolation and scaling rationale',
      'Public API with authentication, versioning, and rate limiting',
      'Developer portal for keys, docs, and usage visibility',
      'Provisioning workflows for new tenant environments',
      'Observability stack with SLO dashboards and alert routing',
      'Security documentation suitable for enterprise technical review',
    ],
    process: [
      {
        title: 'Platform intent workshop',
        body: 'We define who builds on the platform, what they deploy, and which guarantees, uptime, isolation, support, you must uphold contractually.',
      },
      {
        title: 'Control plane design',
        body: 'Identity, billing hooks, quota enforcement, and audit events are modeled before customer-facing APIs are published.',
      },
      {
        title: 'Developer experience build',
        body: 'Portals, SDKs, and sandbox environments let integrators succeed without opening a support ticket for every credential.',
      },
      {
        title: 'Infrastructure hardening',
        body: 'Kubernetes or managed services are configured with network policies, backup strategy, and disaster recovery exercises.',
      },
      {
        title: 'Operational readiness',
        body: 'Runbooks, on-call rotations, and customer communication templates prepare your team for incidents at platform scale.',
      },
    ],
    industries: [
      'SaaS',
      'Fintech',
      'Logistics',
      'Manufacturing',
      'Media',
      'Healthcare',
      'Ecommerce',
    ],
    stack: [
      'Kubernetes',
      'Docker',
      'AWS',
      'Google Cloud',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'Redis',
    ],
    useCases: [
      {
        title: 'Embedded integration platform',
        body: 'Partners connect via APIs and webhooks to embed your capabilities inside their products with tenant-scoped credentials.',
      },
      {
        title: 'Internal developer platform',
        body: 'Standardized deployment templates and service catalogs let product teams ship faster without reinventing infrastructure.',
      },
      {
        title: 'Marketplace infrastructure',
        body: 'Seller onboarding, sandbox testing, and production promotion flows with isolation between marketplace participants.',
      },
      {
        title: 'Data platform API',
        body: 'Governed access to datasets and pipelines with metering, lineage metadata, and role-based query permissions.',
      },
    ],
    benefits: [
      'Integrator onboarding that scales without linear headcount',
      'Isolation and quotas that protect platform stability',
      'APIs with versioning discipline integrators can plan around',
      'Infrastructure you can audit, replicate, and recover',
      'Developer experience that reflects well on your brand',
    ],
    relatedCaseStudies: ['northline-analytics', 'routewise-control', 'axisops-plant', 'ledgerkit-onboarding'],
    faqs: [
      {
        question: 'How is PaaS development different from SaaS?',
        answer:
          'SaaS delivers a finished application to end users. PaaS delivers primitives, APIs, runtimes, deployments, that other teams build on. The architecture, documentation, and isolation requirements are substantially different.',
      },
      {
        question: 'Do you build on Kubernetes or managed services?',
        answer:
          'We match the stack to your operational maturity and compliance needs. Some platforms lean on managed services for speed; others require Kubernetes for custom workload scheduling.',
      },
      {
        question: 'Can you improve an existing platform without a rewrite?',
        answer:
          'Often yes. We start with API inventory, tenant boundary review, and observability gaps, then prioritize changes that unblock integrators and reduce incident frequency.',
      },
      {
        question: 'How do you document APIs for external developers?',
        answer:
          'OpenAPI or GraphQL schemas drive interactive docs, code samples, and changelog discipline so documentation stays aligned with what ships.',
      },
    ],
    visual: 'architecture',
  },
  {
    slug: 'qa-testing',
    name: 'QA & Testing',
    shortName: 'QA & Testing',
    tagline: 'Quality evidence before release, not apologies after.',
    summary:
      'Codeaxes provides manual and automated QA across web, mobile, and APIs, regression suites, performance checks, and CI/CD quality gates that give product and engineering teams clear ship/no-ship signals.',
    heroEyebrow: 'QA & Testing',
    heroTitle: 'Know what breaks before your customers do.',
    heroBody:
      'We design test plans, build automation that survives UI changes, and report results in language stakeholders understand, so releases ship with evidence, not hope.',
    explanation:
      'Testing is only valuable when it maps to business risk. Codeaxes begins with risk-based test planning: which flows generate revenue, which permissions protect sensitive data, and which integrations fail silently in production. Manual exploration catches usability and edge-case issues automation misses; automated suites guard regressions on every merge. Performance and security checks are scoped to realistic threats, not checkbox scans disconnected from your architecture.',
    problems: [
      'Releases regress fixed bugs because regression coverage is incomplete or flaky.',
      'QA happens in a rush the week before launch, delaying schedules and burning out teams.',
      'Automated tests break on every UI tweak, so engineers stop trusting the suite.',
      'API contracts change without contract tests, breaking mobile and partner integrations.',
      'Performance issues surface only after marketing campaigns drive traffic spikes.',
      'Stakeholders receive pass/fail counts without context on residual risk.',
    ],
    capabilities: [
      {
        title: 'Manual QA and exploratory testing',
        body: 'Structured sessions that exercise business-critical paths, permission boundaries, and the messy inputs real users supply.',
      },
      {
        title: 'Automated regression testing',
        body: 'Stable end-to-end and integration suites integrated into CI so every merge gets a meaningful quality signal.',
      },
      {
        title: 'API testing',
        body: 'Contract validation, negative cases, and auth scenarios that protect integrators when backends evolve.',
      },
      {
        title: 'Performance testing',
        body: 'Load and soak tests against production-like environments with actionable bottlenecks, not vanity throughput numbers.',
      },
      {
        title: 'Mobile testing',
        body: 'Device matrix coverage for gestures, push notifications, offline behavior, and store-specific requirements.',
      },
      {
        title: 'CI/CD quality gates',
        body: 'Pipeline stages that block promotion on failed tests, coverage thresholds, or security findings your team agrees matter.',
      },
    ],
    deliverables: [
      'Risk-based test plan aligned to release scope and business priorities',
      'Manual test charters with documented findings and severity ratings',
      'Automated regression suite with CI integration and failure triage guide',
      'API contract test pack with environment configuration',
      'Performance test report with recommended remediation',
      'Release readiness summary stakeholders can act on',
    ],
    process: [
      {
        title: 'Risk assessment',
        body: 'We review upcoming changes, historical defect patterns, and customer impact to focus effort where failure is costliest.',
      },
      {
        title: 'Test design',
        body: 'Cases, data fixtures, and environments are prepared so manual and automated work reinforce the same coverage map.',
      },
      {
        title: 'Execution and automation',
        body: 'Exploratory findings feed new automated cases; flaky tests are fixed or removed so CI stays trustworthy.',
      },
      {
        title: 'Performance and security passes',
        body: 'Targeted runs validate scalability and common vulnerability classes relevant to the release, not generic boilerplate.',
      },
      {
        title: 'Reporting and handoff',
        body: 'Clear release recommendations, open defect lists, and maintenance notes so your team owns the suite long term.',
      },
    ],
    industries: [
      'SaaS',
      'Healthcare',
      'Fintech',
      'Ecommerce',
      'Logistics',
      'Education',
      'Manufacturing',
    ],
    stack: [
      'Playwright',
      'Cypress',
      'Selenium',
      'Jest',
      'Appium',
      'CI/CD',
      'PostgreSQL',
      'Node.js',
    ],
    useCases: [
      {
        title: 'Pre-release regression for SaaS',
        body: 'Full regression on billing, permissions, and core workflows before a major version reaches paying customers.',
      },
      {
        title: 'Mobile release certification',
        body: 'Device lab validation across OS versions before App Store and Play Store submission.',
      },
      {
        title: 'API contract guardrails',
        body: 'Automated checks on every backend deploy so mobile and partner clients never receive silent breaking changes.',
      },
      {
        title: 'Load test before campaign launch',
        body: 'Simulated traffic against checkout and auth paths so marketing spikes do not become outage headlines.',
      },
    ],
    benefits: [
      'Release decisions backed by documented evidence',
      'Regression automation that engineers trust in CI',
      'Fewer production incidents on business-critical flows',
      'Clear communication of residual risk to stakeholders',
      'Test assets your team can extend as the product grows',
    ],
    relatedCaseStudies: ['northline-analytics', 'harbor-commerce', 'careloop-portal', 'axisops-plant'],
    faqs: [
      {
        question: 'Do you replace our internal QA team?',
        answer:
          'We augment it. Many engagements combine staff augmentation for release cycles with automation engineering that leaves durable suites in your repository.',
      },
      {
        question: 'Which automation framework do you prefer?',
        answer:
          'Playwright and Cypress for modern web apps, Appium for mobile, and Jest or similar for unit and integration layers. We choose based on your stack and maintainability, not religious preference.',
      },
      {
        question: 'How do you handle flaky tests?',
        answer:
          'Flaky tests are quarantined, root-caused, and fixed or deleted. A CI pipeline full of noise is worse than no pipeline, we treat reliability as part of the deliverable.',
      },
      {
        question: 'Can you integrate with our existing CI/CD?',
        answer:
          'Yes. We wire quality gates into GitHub Actions, GitLab CI, Jenkins, or other pipelines you already operate, with artifacts and reports visible to the team.',
      },
    ],
    visual: 'pipeline',
  },
  {
    slug: 'custom-development',
    name: 'Custom Development',
    shortName: 'Custom Dev',
    tagline: 'Purpose-built software when off-the-shelf stops fitting.',
    summary:
      'Codeaxes delivers custom web applications, enterprise software, APIs, and integrations, modernizing legacy systems and deploying to cloud environments your operations team can run with confidence.',
    heroEyebrow: 'Custom Development',
    heroTitle: 'Software shaped to how your business actually runs.',
    heroBody:
      'When packaged products force compromises, we engineer bespoke systems, web apps, internal tools, and integration layers, that match your workflows, data model, and compliance obligations.',
    explanation:
      'Custom development succeeds when scope is tied to operational outcomes, not feature wish lists. Codeaxes embeds with stakeholders to document how work flows today, which systems must stay, and where greenfield build reduces long-term cost. We favor modular architectures, clear APIs, testable services, observable deployments, so today\'s custom solution does not become tomorrow\'s unmaintainable monolith. Legacy modernization is phased to keep the business running while strangler patterns retire risk incrementally.',
    problems: [
      'Critical workflows still run on spreadsheets because no SaaS product matches your process.',
      'Legacy applications are too fragile to extend but too embedded to rip out overnight.',
      'Departments bought tools that do not share data, forcing manual reconciliation.',
      'Vendor roadmaps ignore the integrations your operations depend on daily.',
      'Internal engineering is backlogged; business teams wait quarters for simple tools.',
      'Previous custom projects lacked documentation and tests, making changes terrifying.',
    ],
    capabilities: [
      {
        title: 'Web development and applications',
        body: 'Responsive applications with accessible interfaces, server-rendered or SPA architectures chosen for your performance and SEO needs.',
      },
      {
        title: 'Enterprise software',
        body: 'Role-based internal systems, approvals, inventory, scheduling, with audit trails and export tooling enterprise operators require.',
      },
      {
        title: 'APIs and integrations',
        body: 'Connect ERP, CRM, warehouse, and homegrown systems with reliable sync, error handling, and monitoring.',
      },
      {
        title: 'Legacy modernization',
        body: 'Strangler-fig migrations, database refactoring, and UI replacement that de-risk cutover dates.',
      },
      {
        title: 'Cloud deployment',
        body: 'Containerized or serverless deployments on AWS, Google Cloud, or Azure with infrastructure-as-code and environment parity.',
      },
      {
        title: 'Maintenance and support',
        body: 'SLA-backed fixes, dependency updates, and knowledge transfer so your team is not permanently dependent on external staff.',
      },
    ],
    deliverables: [
      'Requirements and integration map validated with business stakeholders',
      'Production web application or internal tool with automated test coverage',
      'REST or GraphQL API with authentication and documentation',
      'Integration connectors with retry logic and operational dashboards',
      'Cloud deployment templates and environment configuration',
      'Technical documentation and handoff sessions for your engineering team',
    ],
    process: [
      {
        title: 'Operational discovery',
        body: 'We map current workflows, data owners, and pain points, often shadowing staff, to ensure software matches reality, not slide decks.',
      },
      {
        title: 'Solution architecture',
        body: 'Buy-vs-build trade-offs, integration points, and phased delivery plan are agreed before sprint commitments.',
      },
      {
        title: 'Iterative build',
        body: 'Vertical slices demoed to stakeholders every sprint so feedback adjusts scope while code remains shippable.',
      },
      {
        title: 'Integration and migration',
        body: 'Data migration scripts, dual-write periods, and rollback plans reduce risk when replacing legacy systems.',
      },
      {
        title: 'Launch and sustain',
        body: 'Training, monitoring, and a maintenance window model keep the system healthy after go-live.',
      },
    ],
    industries: [
      'Manufacturing',
      'Logistics',
      'Healthcare',
      'Real estate',
      'Fintech',
      'Ecommerce',
      'Media',
    ],
    stack: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Python',
      'Django',
      'PostgreSQL',
      'AWS',
    ],
    useCases: [
      {
        title: 'Operations control dashboard',
        body: 'Unified view across warehouse, shipping, and customer service systems with role-based actions and exception queues.',
      },
      {
        title: 'Legacy ERP extension',
        body: 'Modern web layer on top of aging backend systems, exposing APIs mobile and partner tools can consume.',
      },
      {
        title: 'Partner integration hub',
        body: 'Central middleware normalizing data formats between your core system and dozens of vendor APIs.',
      },
      {
        title: 'Customer self-service portal',
        body: 'Account management, document upload, and status tracking connected to back-office workflows without manual email loops.',
      },
    ],
    benefits: [
      'Software aligned to your processes instead of generic product limits',
      'Integrations that eliminate manual data transfer',
      'Modernization paths that avoid big-bang cutover risk',
      'Documented, testable codebases your team can inherit',
      'Cloud deployments with observability built in',
    ],
    relatedCaseStudies: ['axisops-plant', 'routewise-control', 'harbor-commerce', 'careloop-portal'],
    faqs: [
      {
        question: 'When does custom development make sense over SaaS?',
        answer:
          'When your workflow is a competitive advantage, compliance constraints are unique, or integration complexity makes packaged products more expensive to bend than building fit-for-purpose software.',
      },
      {
        question: 'Can you work alongside our internal developers?',
        answer:
          'Yes. We frequently pair with internal teams, owning specific modules, integrations, or modernization tracks while aligning on standards and code review.',
      },
      {
        question: 'How do you approach legacy system replacement?',
        answer:
          'Phased strangler migrations: new capabilities on modern stack, incremental data sync, and cutover only when parity is proven in parallel operation.',
      },
      {
        question: 'Do you provide ongoing maintenance?',
        answer:
          'We offer retainer-based support for patches, OS and dependency updates, and small enhancements, with SLAs defined upfront.',
      },
    ],
    visual: 'systems',
  },
  {
    slug: 'product-development',
    name: 'Product Development',
    shortName: 'Product Dev',
    tagline: 'From validated problem to shipped product, with evidence at every stage.',
    summary:
      'Codeaxes leads product development end to end: discovery, validation, UX/UI, prototyping, MVP engineering, launch, and analytics-driven iteration for teams that need outcomes, not just deliverables.',
    heroEyebrow: 'Product Development',
    heroTitle: 'Turn a validated idea into a product customers keep using.',
    heroBody:
      'We combine product strategy, design, and engineering in one delivery rhythm, so each sprint answers a business question and moves you closer to launch with measurable learning.',
    explanation:
      'Product development is not a handoff chain from consultant to designer to developer. Codeaxes runs discovery workshops, tests assumptions with prototypes, and ships MVPs scoped to learn, not to impress investors with feature breadth. UX/UI decisions are tied to activation and retention metrics defined upfront. After launch, analytics and customer feedback feed a prioritized backlog so continuous improvement is operational routine, not a post-mortem talking point.',
    problems: [
      'Teams build features stakeholders request without validating user demand.',
      'Design and engineering work from different requirements, causing rework late in sprints.',
      'MVPs are over-scoped, delaying market feedback by months.',
      'Launch happens without analytics baselines, so success is argued from anecdotes.',
      'Post-launch iteration stalls because the original agency left no institutional knowledge.',
      'Investors and leadership lack visibility into product risk before major spend.',
    ],
    capabilities: [
      {
        title: 'Discovery and validation',
        body: 'Interviews, journey mapping, and assumption tests that confirm the problem is worth solving before full build budget commits.',
      },
      {
        title: 'UX/UI design',
        body: 'Information architecture, interaction design, and visual systems that prioritize comprehension and task completion over decoration.',
      },
      {
        title: 'Prototyping',
        body: 'Clickable prototypes and technical spikes that de-risk feasibility questions early.',
      },
      {
        title: 'MVP engineering',
        body: 'Minimal feature sets engineered for reliability and instrumentation, not throwaway code discarded after demo day.',
      },
      {
        title: 'Launch planning',
        body: 'Go-to-market coordination, feature flags, support readiness, and rollback plans so launch day is boring in the best way.',
      },
      {
        title: 'Analytics and continuous improvement',
        body: 'Event tracking, funnel analysis, and experiment design that turn usage data into backlog priorities.',
      },
    ],
    deliverables: [
      'Discovery summary with validated problem statement and success metrics',
      'UX flows, wireframes, and high-fidelity UI for core journeys',
      'Interactive prototype tested with representative users',
      'Production MVP with analytics instrumentation',
      'Launch checklist covering ops, support, and communication',
      'Post-launch metrics review and prioritized improvement roadmap',
    ],
    process: [
      {
        title: 'Define and validate',
        body: 'We align on target users, jobs-to-be-done, and kill criteria, what evidence would stop the project responsibly.',
      },
      {
        title: 'Design and prototype',
        body: 'Experiences are tested with users on realistic tasks; findings adjust scope before engineering estimates harden.',
      },
      {
        title: 'Build the MVP',
        body: 'Engineering delivers the smallest lovable product with logging, error tracking, and feature flags from the first release.',
      },
      {
        title: 'Launch',
        body: 'Staged rollout, support scripts, and monitoring dashboards prepare the team for real traffic and real feedback.',
      },
      {
        title: 'Learn and iterate',
        body: 'Weekly metric reviews and customer input convert into a ranked backlog for the next development cycle.',
      },
    ],
    industries: [
      'SaaS',
      'Healthcare',
      'Fintech',
      'Ecommerce',
      'Education',
      'Real estate',
      'Media',
    ],
    stack: [
      'Astro',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'PostgreSQL',
      'AWS',
      'CI/CD',
    ],
    useCases: [
      {
        title: 'Zero-to-one SaaS MVP',
        body: 'Validate pricing and core workflow with paying design partners before scaling engineering headcount.',
      },
      {
        title: 'New module for existing product',
        body: 'Discovery and UX for an adjacent feature set, integrated into current architecture without disrupting stable customers.',
      },
      {
        title: 'Consumer app relaunch',
        body: 'Research-driven redesign and phased feature rollout to recover retention without alienating power users.',
      },
      {
        title: 'Internal product for enterprise',
        body: 'Operator-facing tool designed with the teams who will use it daily, reducing adoption friction and shadow IT workarounds.',
      },
    ],
    benefits: [
      'Decisions backed by user evidence, not hierarchy alone',
      'Design and engineering delivered in one accountable team',
      'MVPs scoped to learn quickly without reckless technical debt',
      'Launch readiness that includes ops, not just code complete',
      'A metrics habit that sustains improvement after go-live',
    ],
    relatedCaseStudies: ['northline-analytics', 'lumen-learn', 'harbor-commerce', 'careloop-portal'],
    faqs: [
      {
        question: 'How is product development different from custom development?',
        answer:
          'Product development emphasizes discovery, validation, and iteration metrics throughout. Custom development often starts with a clearer build spec. Many engagements blend both as uncertainty decreases.',
      },
      {
        question: 'What does an MVP include?',
        answer:
          'The smallest experience that delivers core value to early adopters, with analytics to measure activation and retention, not every feature on a long-term roadmap.',
      },
      {
        question: 'Do you work with our existing product managers?',
        answer:
          'Yes. We embed with your PM and leadership, bringing design and engineering capacity while keeping decision authority where you want it.',
      },
      {
        question: 'How soon will we see usable prototypes?',
        answer:
          'Typically within the first two to three weeks of engagement, enough to test critical assumptions before major build spend.',
      },
    ],
    visual: 'lifecycle',
  },
  {
    slug: 'blockchain',
    name: 'Blockchain Development',
    shortName: 'Blockchain',
    tagline: 'On-chain systems with the same operational discipline as the rest of your stack.',
    summary:
      'Codeaxes designs and ships blockchain products: smart contracts, wallets, token flows, and the off-chain services that make them usable, with testing, observability, and upgrade paths teams can actually operate.',
    heroEyebrow: 'Blockchain',
    heroTitle: 'Ship on-chain products that survive contact with production.',
    heroBody:
      'We build the contracts, the wallets, and the operational layer around them, so token flows, permissions, and audits are designed before mainnet, not after the first incident.',
    explanation:
      'Blockchain work fails when teams treat a contract as a demo and leave custody, indexing, keys, and upgrades as afterthoughts. Codeaxes starts with the business transaction: who can mint, transfer, pause, or settle, and what happens when a transaction reverts. We implement Solidity or permissioned-chain contracts with automated tests, then wrap them in APIs, indexers, and operator consoles so finance, support, and compliance can see state without reading a block explorer. Gas, finality, and key management are part of the architecture, not launch-week surprises.',
    problems: [
      'A token or NFT pilot exists, but nobody owns keys, upgrades, or incident response.',
      'Smart contracts were written without tests, and a mainnet change would be irreversible.',
      'Users cannot complete a flow because wallets, gas, and KYC sit outside the product.',
      'On-chain events never reach CRM, billing, or internal ledgers, so finance reconciles by hand.',
      'Permissioned consortium members cannot agree on identity, settlement, or data visibility.',
      'Security review stalls because threat models, admin roles, and pause switches are undocumented.',
    ],
    capabilities: [
      {
        title: 'Smart contract engineering',
        body: 'Solidity and EVM contracts for tokens, escrow, access control, and settlement, with unit tests, fuzzing, and explicit upgrade or immutability decisions.',
      },
      {
        title: 'Wallets and account flows',
        body: 'Custodial, non-custodial, or embedded wallet UX with recovery, spending limits, and clear signing prompts that operators can support.',
      },
      {
        title: 'Token and NFT product surfaces',
        body: 'Mint, transfer, royalty, and allowlist flows wired to your product, not a disconnected mint page that never talks to the rest of the business.',
      },
      {
        title: 'Indexing and off-chain systems',
        body: 'Event indexers, APIs, and databases that keep CRM, dashboards, and support tools in sync with chain state.',
      },
      {
        title: 'Permissioned and consortium chains',
        body: 'Hyperledger or private EVM networks when public settlement is the wrong fit, with identity, channels, and operational runbooks for member orgs.',
      },
      {
        title: 'Security and launch operations',
        body: 'Threat models, admin role design, pause switches, monitoring, and coordinated testnet-to-mainnet checklists with third-party review when the risk warrants it.',
      },
    ],
    deliverables: [
      'Contract architecture with roles, upgrade policy, and failure modes documented',
      'Tested smart contracts plus deployment scripts for testnet and mainnet',
      'Wallet and product UI for the flows users actually complete',
      'Indexer and API layer that exposes chain events to internal systems',
      'Key management and admin runbooks, including incident and pause procedures',
      'Launch checklist covering gas, monitoring, and post-deploy verification',
    ],
    process: [
      {
        title: 'Transaction design',
        body: 'We map the business event to on-chain state, who signs, who can reverse, and which data must stay off-chain for privacy or performance.',
      },
      {
        title: 'Contract and threat model',
        body: 'Roles, invariants, and upgrade strategy are written before implementation, then encoded as tests that fail if those invariants break.',
      },
      {
        title: 'Build and integrate',
        body: 'Contracts, indexers, and product surfaces ship together so a successful transaction is visible in the app, not only on a block explorer.',
      },
      {
        title: 'Testnet rehearsal',
        body: 'Load, failure, and admin drills run on testnet, including key rotation and pause, before any mainnet value is at risk.',
      },
      {
        title: 'Mainnet and operate',
        body: 'Staged deploy, monitoring, and a named owner for incidents, with a path to iterate without surprising token holders or partners.',
      },
    ],
    industries: ['Fintech', 'SaaS', 'Media', 'Logistics', 'Healthcare', 'Ecommerce', 'Manufacturing'],
    stack: ['Solidity', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'CI/CD', 'Hardhat'],
    useCases: [
      {
        title: 'Programmable settlement between partners',
        body: 'Escrow and release rules live in contracts, while invoices and exceptions still appear in the operator console finance already uses.',
      },
      {
        title: 'Membership or access tokens',
        body: 'On-chain entitlements gate product features, with off-chain identity so support can restore access without exposing private keys.',
      },
      {
        title: 'Supply-chain attestation',
        body: 'Shipment or batch events are hashed on-chain, with rich documents stored off-chain and linked for auditors who need both.',
      },
      {
        title: 'Internal treasury dashboard',
        body: 'Multi-sig policy, spend limits, and labeled transfers so finance sees chain activity in the same language as the rest of cash operations.',
      },
    ],
    benefits: [
      'Contracts with tests and an explicit upgrade or freeze policy',
      'Product UX that does not assume every user is a crypto-native',
      'Off-chain systems that keep operations, support, and finance in the loop',
      'Launch rehearsal on testnet before real value moves',
      'A threat model you can show a security reviewer without improvising',
    ],
    relatedCaseStudies: ['ledgerkit-onboarding', 'harbor-commerce', 'northline-analytics', 'routewise-control'],
    faqs: [
      {
        question: 'Do you only work on public Ethereum?',
        answer:
          'No. We choose public EVM chains, L2s, or permissioned networks based on settlement needs, privacy, and who must operate the infrastructure. The product and the chain are decided together.',
      },
      {
        question: 'Can you audit our existing contracts?',
        answer:
          'We review architecture, tests, and admin roles, and we harden what we find. For high-value mainnet code we coordinate an independent specialist audit rather than treating an internal review as a substitute.',
      },
      {
        question: 'How do you handle keys and custody?',
        answer:
          'We design for the custody model you need: user-held wallets, embedded wallets, or institutional custody. Secrets never live in the repo, and admin keys have documented rotation and dual-control where the risk requires it.',
      },
      {
        question: 'What if we already have a token and need a real product around it?',
        answer:
          'That is a common engagement. We inventory the live contracts, then build indexing, wallets, and operator tools so the token is usable inside a product, not only tradable.',
      },
    ],
    visual: 'architecture',
  },
  {
    slug: 'project-data',
    name: 'Project Data',
    shortName: 'Project Data',
    tagline: 'Pipelines, warehouses, and metrics that operators can trust on Monday morning.',
    summary:
      'Codeaxes builds project data platforms: ingestion, modeling, quality checks, and dashboards that turn product, operations, and finance events into decisions, with lineage so people know what a number actually means.',
    heroEyebrow: 'Project Data',
    heroTitle: 'Give every project a data layer that holds up under questions.',
    heroBody:
      'We design warehouses, pipelines, and metric definitions so product, ops, and leadership share one version of the work, not a folder of conflicting spreadsheets.',
    explanation:
      'Project data is the operational record of how a product or program is actually performing: events, tickets, shipments, revenue, quality. Codeaxes does not start with a dashboard theme. We start with the questions stakeholders already argue about, then design sources, models, and contracts that can answer them repeatedly. Ingestion is scheduled and observable. Transformations are versioned. Quality tests fail the pipeline when grain or nulls drift. The warehouse is documented so a new analyst can find the grain of a table without a hallway conversation.',
    problems: [
      'Each team has a different count for the same KPI, and nobody can reconstruct the definition.',
      'Event tracking exists in the product but never lands in a warehouse the business can query.',
      'Analysts rebuild the same joins in notebooks because modeled tables were never owned.',
      'A vendor export is treated as truth until a finance close exposes missing rows.',
      'PII and access rules are informal, so useful data stays locked in the most cautious team.',
      'Dashboards look finished, then break silently when an upstream schema changes.',
    ],
    capabilities: [
      {
        title: 'Source mapping and data contracts',
        body: 'We inventory product events, SaaS exports, and operational databases, then define contracts for grain, keys, and freshness before pipelines are written.',
      },
      {
        title: 'Ingestion and orchestration',
        body: 'Batch and streaming pipelines with retries, late-arriving data handling, and alerts when a source stalls, not a cron job nobody watches.',
      },
      {
        title: 'Warehouse modeling',
        body: 'Layered models, staging, core, marts, with documented grain so product, finance, and operations can share tables without forking logic.',
      },
      {
        title: 'Quality, lineage, and access',
        body: 'Tests on uniqueness, accepted values, and volume, plus lineage and role-based access so a broken metric is diagnosable and PII stays scoped.',
      },
      {
        title: 'Metrics and decision surfaces',
        body: 'Metric catalogs, operator dashboards, and exports into the tools teams already live in, with owners named for each number.',
      },
      {
        title: 'Analytics engineering handoff',
        body: 'dbt or equivalent projects, runbooks, and review habits so your team can extend models without waiting on the original authors.',
      },
    ],
    deliverables: [
      'Source inventory and data contract pack for priority entities',
      'Orchestrated ingestion into a warehouse or lakehouse you control',
      'Modeled tables with tests, documentation, and named owners',
      'Metric definitions aligned to product and finance questions',
      'Dashboards or semantic layer for the roles who make weekly decisions',
      'Access model, lineage notes, and a runbook for failed jobs',
    ],
    process: [
      {
        title: 'Question and grain workshop',
        body: 'We list the decisions the data must support, the grain of each fact, and the arguments that currently happen in spreadsheets.',
      },
      {
        title: 'Contract and architecture',
        body: 'Sources, PII boundaries, warehouse choice, and SLAs for freshness are written down before transformation code multiplies.',
      },
      {
        title: 'Pipeline and model build',
        body: 'Ingestion, tests, and core models ship in vertical slices so one trustworthy domain is live before the next is attempted.',
      },
      {
        title: 'Decision surfaces',
        body: 'Dashboards and metric APIs are validated with the people who will use them, including what they will do when a number looks wrong.',
      },
      {
        title: 'Operate and extend',
        body: 'Alerting, ownership, and a backlog for the next domains, so the platform does not freeze as a one-off project.',
      },
    ],
    industries: ['SaaS', 'Ecommerce', 'Logistics', 'Fintech', 'Healthcare', 'Education', 'Manufacturing'],
    stack: ['Python', 'dbt', 'PostgreSQL', 'Google Cloud', 'AWS', 'Airflow', 'Looker', 'CI/CD'],
    useCases: [
      {
        title: 'Product analytics warehouse',
        body: 'App events land in modeled sessions and funnels with the same user keys CRM uses, so activation debates end with a query, not a slide.',
      },
      {
        title: 'Operations control metrics',
        body: 'Orders, exceptions, and SLA clocks from multiple systems share a grain, so a late shipment has one status, not three.',
      },
      {
        title: 'Finance-grade revenue tables',
        body: 'Billing, refunds, and recognition rules are modeled with tests, so monthly close is a review, not a reconstruction.',
      },
      {
        title: 'Multi-source customer 360',
        body: 'Support, product, and billing identities are resolved with documented match rules and an audit of what could not be matched.',
      },
    ],
    benefits: [
      'One documented grain for each core fact table',
      'Pipelines that fail loudly instead of drifting quietly',
      'Metrics with owners, not orphan dashboards',
      'Access and PII rules that let more people use data safely',
      'A modeling project your analysts can extend after handoff',
    ],
    relatedCaseStudies: ['northline-analytics', 'routewise-control', 'harbor-commerce', 'axisops-plant'],
    faqs: [
      {
        question: 'Is this the same as AI automation?',
        answer:
          'No. Project Data is the warehouse, pipelines, and metric layer. AI automation consumes that layer when language or unstructured work is involved. Many clients need the data platform first, otherwise the model is guessing on dirty joins.',
      },
      {
        question: 'Do you replace our existing BI tool?',
        answer:
          'Only if it cannot serve the questions. We often keep Looker, Metabase, or similar and put effort into modeled tables and metric definitions underneath, which is where most of the pain actually lives.',
      },
      {
        question: 'Can you work with data we cannot move to the cloud?',
        answer:
          'Yes. We design for warehouse location, VPC peering, and on-prem sources. Residency constraints belong in the architecture, not as a surprise after vendor signup.',
      },
      {
        question: 'How do you keep pipelines from becoming a second undocumented codebase?',
        answer:
          'Contracts, tests, and docs are part of definition of done. Pull requests review model grain and owners the same way application code reviews behavior.',
      },
    ],
    visual: 'dashboard',
  },
  {
    slug: 'game-development',
    name: 'Game Development',
    shortName: 'Games',
    tagline: 'Playable software with production pipelines, not a prototype that never leaves the editor.',
    summary:
      'Codeaxes builds games and game-like products in Unity and related stacks: core loops, live ops, multiplayer services, and store submission, with the same release discipline we use on other software.',
    heroEyebrow: 'Game Development',
    heroTitle: 'Build a game your team can ship, operate, and update.',
    heroBody:
      'We engineer the loop, the content pipeline, and the live services around it, so the first playable build is also a path to stores, patches, and measurable retention.',
    explanation:
      'Game projects stall when art, design, and engineering never share a pipeline, or when a vertical slice cannot be rebuilt by anyone except the original contractor. Codeaxes treats a game as a product: instrumentation on the loop, content that non-engineers can ship, and backends that can be patched without a full resubmit when possible. We work in Unity for most 2D and 3D product games, serious games, and interactive experiences, and we are explicit about scope. A store-ready mobile game, a training sim, and an Unreal cinematic are different delivery shapes, and we will say which one you are actually buying.',
    problems: [
      'A prototype exists in Unity, but scenes, assets, and code cannot be rebuilt by a second person.',
      'Content updates require an engineer, so live ops never happens.',
      'Multiplayer was bolted on late and cheats or desyncs appear under a handful of players.',
      'Store listings, age ratings, and platform SDKs were left to the week of submission.',
      'Performance is fine on the developer machine and unplayable on the target device tier.',
      'There is no telemetry on where players quit, so design arguments stay anecdotal.',
    ],
    capabilities: [
      {
        title: 'Unity product engineering',
        body: 'Gameplay systems, scene architecture, and addressable content so the project stays loadable and reviewable as the team grows.',
      },
      {
        title: '2D and 3D game loops',
        body: 'Core loop, progression, economy, and feel, scoped to the genre you are shipping rather than a feature list copied from a larger title.',
      },
      {
        title: 'Multiplayer and live services',
        body: 'Session, matchmaking, and authoritative server patterns where needed, with cheat and disconnect behavior designed, not hoped for.',
      },
      {
        title: 'Content and art pipeline',
        body: 'Import rules, naming, localization, and tooling so designers and artists can iterate without breaking builds.',
      },
      {
        title: 'Platform and store delivery',
        body: 'iOS, Android, Steam, or webGL targets with signing, age ratings, platform SDKs, and a patch story after launch.',
      },
      {
        title: 'Performance and live ops',
        body: 'Device-tier budgets, crash reporting, remote config, and event analytics tied to retention, not vanity session counts.',
      },
    ],
    deliverables: [
      'Playable vertical slice on target hardware with a documented content pipeline',
      'Unity project structure, coding standards, and CI for player builds',
      'Backend or BaaS integration for accounts, saves, or multiplayer if in scope',
      'Store submission package and a first-patch process',
      'Telemetry plan for funnel, economy, and crash visibility',
      'Live-ops runbook: remote config, content drops, and incident contact',
    ],
    process: [
      {
        title: 'Loop and audience',
        body: 'We lock the player fantasy, session length, platform, and what “fun enough to ship” means before production art spend accelerates.',
      },
      {
        title: 'Vertical slice',
        body: 'One complete loop on target devices, with placeholder-to-final art rules, so later production is multiplication, not invention.',
      },
      {
        title: 'Production pipeline',
        body: 'Systems, content tools, and CI so multiple people can submit without destroying the project file.',
      },
      {
        title: 'Soft launch or closed test',
        body: 'Performance, economy, and onboarding are measured with real players on representative hardware.',
      },
      {
        title: 'Launch and operate',
        body: 'Store release, crash triage, and a content calendar the team can actually staff.',
      },
    ],
    industries: ['Media', 'Education', 'Ecommerce', 'Healthcare', 'SaaS', 'Fintech', 'Real estate'],
    stack: ['Unity', 'C#', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'CI/CD', 'Appium'],
    useCases: [
      {
        title: 'Mobile mid-core with live ops',
        body: 'A tight loop, remote config, and seasonal content drops without rebuilding the client for every event.',
      },
      {
        title: 'Training or serious game',
        body: 'A scored scenario for operators or students, with telemetry that learning and compliance teams can export.',
      },
      {
        title: 'Brand or product interactive',
        body: 'A web or mobile experience that has to feel like a game, with analytics tied to campaign or product goals, not only playtime.',
      },
      {
        title: 'Prototype to production rescue',
        body: 'An existing Unity prototype is restructured so new engineers can ship features and stores will accept the build.',
      },
    ],
    benefits: [
      'A project layout more than one person can maintain',
      'Content updates without a full engineering bottleneck',
      'Performance budgets on the devices you actually target',
      'Store and patch process treated as product work',
      'Telemetry that informs design instead of decorating a dashboard',
    ],
    relatedCaseStudies: ['lumen-learn', 'harbor-commerce', 'careloop-portal', 'northline-analytics'],
    faqs: [
      {
        question: 'Do you build AAA console titles?',
        answer:
          'That is not our default engagement. We ship product games, serious games, and interactive experiences with a staffable pipeline. If the scope is a large Unreal cinematic production, we will say so and shape the team honestly.',
      },
      {
        question: 'Unity or Unreal?',
        answer:
          'Unity for most 2D, mobile, and productized 3D. Unreal when high-fidelity 3D or an existing Unreal codebase is the constraint. We pick from the target platform and the team who will own the project after we leave.',
      },
      {
        question: 'Can you work with our artists and designers?',
        answer:
          'Yes. We usually own engineering and pipeline, and we set import and review rules so art and design land in the build without a weekly merge crisis.',
      },
      {
        question: 'How do you handle multiplayer?',
        answer:
          'We decide early whether the game needs an authoritative server, peer networking, or async state. Multiplayer is a product and ops commitment, not a checkbox in week twelve.',
      },
    ],
    visual: 'devices',
  },
  {
    slug: 'cloud-computing',
    name: 'Cloud Computing',
    shortName: 'Cloud',
    tagline: 'Landing zones, migrations, and cost control for workloads that have to stay up.',
    summary:
      'Codeaxes designs and runs cloud foundations on AWS, Google Cloud, and Azure: accounts, networks, identity, migration, and FinOps, so products have an environment that is repeatable rather than a single engineer’s console history.',
    heroEyebrow: 'Cloud Computing',
    heroTitle: 'Put production in a cloud you can explain, copy, and recover.',
    heroBody:
      'We build the landing zone, move the workloads, and instrument cost and reliability, so the next environment is a template, not another undocumented account.',
    explanation:
      'Cloud computing at Codeaxes is the foundation layer: identities, networks, accounts, backup, and the path from a laptop or a data center onto managed infrastructure. It is not the same as building a PaaS product for other developers, and it is not only CI scripts. We start with what must not fail, RPO and RTO, data residency, who can change production, then implement infrastructure as code so a second region or a second product does not require folklore. Migrations are sequenced. Rollback is rehearsed. Cost is tagged from the first resource, not discovered in a surprise bill.',
    problems: [
      'Production lives in one engineer’s AWS account with no org structure or break-glass path.',
      'A lift-and-shift left idle resources and a bill nobody can attribute to a product.',
      'Environments drift because staging was clicked together in the console.',
      'A region outage has no documented failover, only a hope that backups exist.',
      'Identity is a shared IAM user, so audits cannot say who changed what.',
      'The team wants Kubernetes because it is popular, not because the workload needs it.',
    ],
    capabilities: [
      {
        title: 'Landing zone and account design',
        body: 'Org structure, identity federation, guardrails, and network patterns that match how your teams actually ship, not a reference architecture nobody applies.',
      },
      {
        title: 'Workload architecture',
        body: 'Compute, data, and edge choices, VMs, containers, serverless, matched to traffic, team skill, and compliance, with the trade-offs written down.',
      },
      {
        title: 'Migration and modernization',
        body: 'Discovery of current hosts, a sequenced move, dual-run where needed, and a cutover with rollback, including the data path, not only the app servers.',
      },
      {
        title: 'Reliability and recovery',
        body: 'Backup, multi-AZ or multi-region where the RTO requires it, restore tests, and incident communication that does not start from a blank page.',
      },
      {
        title: 'FinOps and tagging',
        body: 'Cost allocation, budgets, and the habit of reviewing idle spend, so cloud is a product cost, not a mystery.',
      },
      {
        title: 'Security baseline',
        body: 'Encryption, secrets, private networking, and logging that satisfy common questionnaires without pretending to be your entire GRC program.',
      },
    ],
    deliverables: [
      'Landing zone with account, identity, and network diagrams',
      'Infrastructure as code for the foundation and first workloads',
      'Migration plan with sequenced cutovers and rollback',
      'Backup and restore evidence for agreed RPO and RTO',
      'Tagging, budgets, and a first FinOps review',
      'Runbooks for access, incidents, and environment promotion',
    ],
    process: [
      {
        title: 'Current-state and constraints',
        body: 'We inventory workloads, data sensitivity, residency, and who currently has production access, including the unofficial paths.',
      },
      {
        title: 'Target architecture',
        body: 'Provider, account model, and compute shape are chosen against RTO, skill, and cost, with explicit non-goals so Kubernetes is not the default.',
      },
      {
        title: 'Foundation build',
        body: 'Identity, network, logging, and IaC land before applications move, so the first migrated service inherits the baseline.',
      },
      {
        title: 'Migrate and prove',
        body: 'Workloads move in slices with dual-run, restore tests, and traffic shifting that can reverse.',
      },
      {
        title: 'Operate and optimize',
        body: 'Cost reviews, patch windows, and a backlog for the next environment or region, owned by named operators.',
      },
    ],
    industries: ['SaaS', 'Healthcare', 'Fintech', 'Ecommerce', 'Logistics', 'Manufacturing', 'Education'],
    stack: ['AWS', 'Google Cloud', 'Azure', 'Terraform', 'Kubernetes', 'Docker', 'PostgreSQL', 'CI/CD'],
    useCases: [
      {
        title: 'First production landing zone',
        body: 'A startup leaves a single shared account for a structured org with SSO, separate prod, and a way to recreate staging from code.',
      },
      {
        title: 'Data-center to cloud move',
        body: 'A sequenced migration of apps and databases with dual-run, DNS cutover, and a tested restore, not a weekend hope.',
      },
      {
        title: 'Cost and sprawl cleanup',
        body: 'Untagged resources, idle disks, and forgotten snapshots are attributed, then either owned or removed against a budget.',
      },
      {
        title: 'Regulated workload baseline',
        body: 'Private networking, encryption, and logging packaged so security questionnaires have diagrams instead of screenshots.',
      },
    ],
    benefits: [
      'Environments that can be reproduced from code',
      'Migrations with a reverse gear',
      'Cost that maps to products and teams',
      'Identity and logging that survive an audit question',
      'A foundation PaaS and product teams can build on without forking accounts',
    ],
    relatedCaseStudies: ['axisops-plant', 'routewise-control', 'ledgerkit-onboarding', 'northline-analytics'],
    faqs: [
      {
        question: 'How is this different from PaaS development?',
        answer:
          'Cloud computing is the environment your products run on. PaaS development is building a platform that other developers deploy onto. Many companies need the first; only some are selling the second.',
      },
      {
        question: 'Will you force Kubernetes?',
        answer:
          'No. We use managed containers or serverless when they match the workload and the team. Kubernetes is chosen when scheduling, density, or isolation actually require it.',
      },
      {
        question: 'Can you work inside our existing AWS organization?',
        answer:
          'Yes. We prefer to extend a landing zone you already have, and we will say when a greenfield account structure is cheaper than fighting years of console drift.',
      },
      {
        question: 'Do you operate the cloud after go-live?',
        answer:
          'We can, under a named retainer with patch windows and incident expectations. We can also hand the foundation to your platform team with runbooks and pairing.',
      },
    ],
    visual: 'architecture',
  },
  {
    slug: '2d-animations',
    name: '2D Animations',
    shortName: '2D Animation',
    tagline: 'Motion that ships in the product, not a render that dies in a slide deck.',
    summary:
      'Codeaxes produces 2D animation for products and games: UI motion, character and explainer sequences, Lottie and Rive runtimes, and a handoff pipeline so engineering can play the work at 60fps without guessing timing.',
    heroEyebrow: '2D Animations',
    heroTitle: 'Animate the interface and the story in a format your product can run.',
    heroBody:
      'We design 2D motion for real runtimes, Lottie, Rive, Spine, or engine sprites, with performance budgets, localization, and a pipeline from storyboard to shipped asset.',
    explanation:
      '2D animation on a product team is a delivery problem as much as an art problem. A beautiful After Effects file that cannot loop, localize, or stay under a kilobyte budget will be replaced with a static PNG. Codeaxes starts with where the motion lives: onboarding, empty states, game characters, or a short explainer inside the app. We pick a runtime the client can actually ship, then animate to that constraint. Timing, easing, and reduced-motion fallbacks are specified. Marketing-only films can be produced with Kuroaxe when the work is campaign, not product.',
    problems: [
      'Designers deliver video files that cannot be themed, localized, or paused in the UI.',
      'Lottie exports are huge, drop frames on mid-tier phones, or break when copy changes.',
      'Game 2D characters have no consistent rig, so every new action is a one-off.',
      'Motion is inconsistent across the product because there is no token or duration system.',
      'Engineering re-creates animations in code from a silent screen recording.',
      'There is no reduced-motion path, so accessibility review fails late.',
    ],
    capabilities: [
      {
        title: 'Product UI motion',
        body: 'Micro-interactions, transitions, and empty states specified as tokens and implemented in Lottie, Rive, or CSS/engine, with reduced-motion variants.',
      },
      {
        title: 'Character and 2D game art motion',
        body: 'Rigs, cycles, and attack or emote sets for Spine, DragonBones, or Unity 2D, with naming that a designer can extend.',
      },
      {
        title: 'Explainer and onboarding sequences',
        body: 'Short narrative clips that still export as interactive or segmented assets, not a 40MB MP4 that blocks first paint.',
      },
      {
        title: 'Runtime engineering',
        body: 'Integration of Lottie, Rive, or sprite atlases into web, iOS, Android, or Unity, including theming, localization slots, and fallbacks.',
      },
      {
        title: 'Pipeline and versioning',
        body: 'Source files, export presets, and review gates so a copy change does not require a full re-composite from memory.',
      },
      {
        title: 'Performance and accessibility',
        body: 'Frame budgets, file-size targets, and prefers-reduced-motion behavior tested on the devices your users actually have.',
      },
    ],
    deliverables: [
      'Motion principles and duration tokens aligned to your UI kit',
      'Storyboards and animatics for the sequences in scope',
      'Production 2D assets in the agreed runtime, Lottie, Rive, Spine, or sprites',
      'Engineering integration or a drop-in package with usage notes',
      'Reduced-motion and localization variants',
      'Source project files and export presets for later edits',
    ],
    process: [
      {
        title: 'Where motion earns its keep',
        body: 'We pick the surfaces that change comprehension or delight, and we kill decorative motion that would only slow the app.',
      },
      {
        title: 'Runtime and budget',
        body: 'File size, FPS, and platform constraints are set before illustration style locks, so we do not animate a film the device cannot play.',
      },
      {
        title: 'Boards and rigs',
        body: 'Boards, timing, and character rigs are approved as stills and loops before full color production.',
      },
      {
        title: 'Produce and integrate',
        body: 'Final assets land in the product or game with engineering pairing, not a zip file emailed on Friday.',
      },
      {
        title: 'Tune on device',
        body: 'We test on target hardware, fix jank, and document how to swap copy or theme without opening the original composition blindly.',
      },
    ],
    industries: ['SaaS', 'Education', 'Media', 'Ecommerce', 'Healthcare', 'Fintech', 'Real estate'],
    stack: ['Rive', 'Lottie', 'After Effects', 'Spine', 'Unity', 'TypeScript', 'React', 'Flutter'],
    useCases: [
      {
        title: 'SaaS onboarding without a video player',
        body: 'Segmented Lottie or Rive scenes that pause on user input and swap copy per locale without re-exporting the whole film.',
      },
      {
        title: '2D game character set',
        body: 'Idle, walk, and action cycles on a shared rig so a new skin does not require re-animating every clip.',
      },
      {
        title: 'Empty and success states',
        body: 'Lightweight loops that explain the next action, with an instant static fallback when the user prefers reduced motion.',
      },
      {
        title: 'In-product explainer',
        body: 'A 20-second sequence that plays inside the app, themed to the design system, instead of a YouTube embed.',
      },
    ],
    benefits: [
      'Motion that runs in the product runtime, not only in After Effects',
      'File-size and FPS budgets decided before production',
      'Rigs and presets your team can edit later',
      'Reduced-motion and localization treated as requirements',
      'Engineering handoff that does not rely on screen recordings',
    ],
    relatedCaseStudies: ['lumen-learn', 'harbor-commerce', 'careloop-portal', 'ledgerkit-onboarding'],
    faqs: [
      {
        question: 'Is this marketing animation?',
        answer:
          'Product and game motion lives here. Campaign films and brand spots are a Kuroaxe conversation when they are not shipping inside the product. We will route that honestly rather than force a product studio to act like an ad house.',
      },
      {
        question: 'Lottie, Rive, or video?',
        answer:
          'Lottie for simple vector UI. Rive when state machines and interactivity matter. Sprites or Spine for games. Video only when the sequence is non-interactive and the weight is acceptable. We choose from the surface, not from a favorite tool.',
      },
      {
        question: 'Can you match our existing illustration style?',
        answer:
          'Yes, if you provide the kit. If the style cannot hold up as a rigged character or a looping UI asset, we will flag that before production, not after.',
      },
      {
        question: 'Do you implement the animation in code as well?',
        answer:
          'Usually yes. The point of this service is a shipped runtime, not a render sitting in Drive. Implementation can be web, mobile, or Unity depending on the product.',
      },
    ],
    visual: 'lifecycle',
  },
  {
    slug: 'devops',
    name: 'DevOps',
    shortName: 'DevOps',
    tagline: 'Delivery machinery that makes every merge safer than the last.',
    summary:
      'Codeaxes implements DevOps as a product capability: CI/CD, infrastructure as code, GitOps, environments, and observability, so releases are boring and incidents have a trail.',
    heroEyebrow: 'DevOps',
    heroTitle: 'Make shipping the least dramatic part of the week.',
    heroBody:
      'We build pipelines, environments, and feedback loops that turn a merge into a verified deploy, with rollback, secrets, and signals your team will actually look at.',
    explanation:
      'DevOps is not a job title and not a cloud bill. It is the system that takes code from a pull request to a running environment with evidence. Codeaxes maps how you build, test, approve, and release today, including the unofficial SSH path. Then we replace folklore with pipelines, immutable artifacts, and environment promotion. Quality gates belong here as automation the team trusts, complementary to the QA practice that designs the cases. Platform work, golden paths, preview environments, is in scope when product teams are blocked on tickets for every database. Observability is designed for the questions on-call will ask at 2 a.m., not a wall of unused dashboards.',
    problems: [
      'Production is deployed from a laptop, and nobody can reconstruct what shipped last Thursday.',
      'CI is a wall of flaky jobs that people skip with an empty commit.',
      'Secrets live in env files on disk, copied into Slack when someone joins.',
      'Staging does not resemble production, so every release is a first-time event.',
      'There is no rollback that does not involve restoring a database from memory.',
      'Alerts fire constantly, or never, so on-call learns to ignore the channel.',
    ],
    capabilities: [
      {
        title: 'CI/CD and artifact pipelines',
        body: 'Build, test, scan, and promote immutable artifacts with branch protection and a recorded deployer, including mobile and container flows.',
      },
      {
        title: 'Infrastructure as code',
        body: 'Terraform or equivalent for environments that can be reviewed, reproduced, and torn down without console archaeology.',
      },
      {
        title: 'GitOps and environment promotion',
        body: 'Declared desired state for Kubernetes or app platform deploys, with promotion from preview to staging to production that is the same motion every time.',
      },
      {
        title: 'Secrets, identity, and policy',
        body: 'Vault or cloud secret stores, OIDC to cloud roles, and least privilege so a leaked laptop is not a leaked production database.',
      },
      {
        title: 'Observability and SLO signals',
        body: 'Logs, metrics, traces, and a small set of alerts mapped to user-facing failure, plus error budgets the team can talk about in standup.',
      },
      {
        title: 'Developer platform basics',
        body: 'Preview environments, golden templates, and self-service paths that remove the ticket queue for “please stand up a database.”',
      },
    ],
    deliverables: [
      'Pipeline as code covering test, scan, build, and deploy',
      'Infrastructure as code for at least two environments',
      'Secret and identity design with rotation notes',
      'Promotion and rollback runbook, rehearsed once',
      'Observability baseline: dashboards and alerts tied to user journeys',
      'Contributor docs so a new engineer can ship without a tribal walkthrough',
    ],
    process: [
      {
        title: 'Delivery archaeology',
        body: 'We watch a real release, including the parts that happen in chat and on personal machines, and list every unrecorded step.',
      },
      {
        title: 'Golden path design',
        body: 'The default way to ship one service is specified: tests required, artifact produced, environment targeted, rollback command.',
      },
      {
        title: 'Pipeline and IaC',
        body: 'CI, environments, and secrets land first for one service so the pattern is proven before it is copied.',
      },
      {
        title: 'Signals and rehearsal',
        body: 'We break a staging deploy on purpose, practice rollback, and tune alerts until noise is lower than signal.',
      },
      {
        title: 'Spread and own',
        body: 'The path is rolled to remaining services with named owners, and a backlog for platform improvements that product teams feel.',
      },
    ],
    industries: ['SaaS', 'Fintech', 'Healthcare', 'Ecommerce', 'Logistics', 'Media', 'Manufacturing'],
    stack: ['CI/CD', 'Terraform', 'Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'Prometheus', 'Grafana'],
    useCases: [
      {
        title: 'From laptop deploys to a pipeline',
        body: 'A product team gets branch protection, artifacts, and a one-command rollback, and production SSH becomes break-glass only.',
      },
      {
        title: 'Preview environments per pull request',
        body: 'Design and QA review a live URL per change, then the same chart promotes to staging, which cuts “works on my machine” arguments.',
      },
      {
        title: 'Regulated release evidence',
        body: 'Every production change has who, what artifact, which tests, and a ticket link, suitable for a questionnaire rather than a reconstructed chat log.',
      },
      {
        title: 'Noisy on-call cleanup',
        body: 'Alerts are rebuilt around a few SLOs. The channel goes quiet enough that a page means something.',
      },
    ],
    benefits: [
      'Releases that can be reconstructed after the fact',
      'Environments defined in code, not in a console',
      'Secrets and identity that survive staff changes',
      'Rollback that has been practiced',
      'Alerts mapped to user impact instead of host CPU folklore',
    ],
    relatedCaseStudies: ['axisops-plant', 'northline-analytics', 'ledgerkit-onboarding', 'routewise-control'],
    faqs: [
      {
        question: 'How is DevOps different from QA testing?',
        answer:
          'QA designs cases, risk coverage, and whether the product is fit to ship. DevOps automates how that evidence is gathered on every merge and how a passing build becomes an environment. We often staff both; they are not substitutes.',
      },
      {
        question: 'How is DevOps different from cloud computing?',
        answer:
          'Cloud computing is the landing zone, accounts, and workload placement. DevOps is the path code takes onto that cloud, and how you see it once it is there. A landing zone without pipelines still ships from laptops.',
      },
      {
        question: 'Do you require Kubernetes and GitOps?',
        answer:
          'Only when they reduce toil. A small product on Cloud Run or ECS can have excellent DevOps with GitHub Actions and IaC. We will not install a cluster to look modern.',
      },
      {
        question: 'Will you be our on-call team?',
        answer:
          'We can share on-call during a handover window. Long-term ownership should sit with your operators, with our retainer as backup if that is the contract. We do not silently become a 24/7 NOC without saying so in the SOW.',
      },
    ],
    visual: 'pipeline',
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export const serviceSlugs = services.map((service) => service.slug);
