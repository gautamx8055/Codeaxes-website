import type { FaqCategory } from '../types';

export const faqCategories: FaqCategory[] = [
  {
    id: 'working-with-codeaxes',
    title: 'Working with Codeaxes',
    items: [
      {
        question: 'What types of companies does Codeaxes work with?',
        answer:
          'We partner with product-led startups, scale-ups, and enterprise teams building SaaS, regulated platforms, commerce systems, and operational software. Engagements range from greenfield products to modernizing systems that already serve paying customers.',
      },
      {
        question: 'How do you start a new engagement?',
        answer:
          'Most projects begin with a structured discovery phase: current architecture, users, constraints, and the decisions the software must enable. From there we propose an engagement model, focused discovery, a dedicated squad, or a longer product partnership, matched to scope and internal capacity.',
      },
      {
        question: 'Do you work alongside our existing engineering team?',
        answer:
          'Yes. We frequently embed with in-house engineers, designers, and product managers. We align on branching, review standards, and ceremonies so the collaboration feels like an extension of your team rather than a parallel track.',
      },
      {
        question: 'Where is your team located and how do you communicate?',
        answer:
          'We work remotely with overlap across US and European time zones. Day-to-day communication happens in your preferred tools, Slack, Teams, Linear, Jira, with written summaries, async updates, and scheduled reviews for stakeholders who need a broader view.',
      },
      {
        question: 'Can you take over a project mid-stream?',
        answer:
          'We can, after a technical and delivery audit of the codebase, infrastructure, and open risks. We will be direct about what is salvageable, what needs hardening, and what should be reworked before new feature work accelerates.',
      },
      {
        question: 'Are you hiring?',
        answer:
          'Open roles are listed on the Careers page in two tracks: Codeaxes for product engineering, and Kuroaxe for marketing. Each posting is published from our hiring workspace and includes the team, location, and how to apply. If you do not see a matching role, send a note through Contact.',
      },
      {
        question: 'What does success look like at the end of an engagement?',
        answer:
          'Success means production-ready software your team can operate: documented architecture, tested critical paths, observability in place, and knowledge transfer completed. We optimize for continuity, not dependency.',
      },
    ],
  },
  {
    id: 'project-timelines',
    title: 'Project timelines',
    items: [
      {
        question: 'How long does a typical project take?',
        answer:
          'Timelines depend on scope, integration complexity, and regulatory constraints, not a generic template. A focused MVP might span a few months; a multi-tenant platform or regulated workflow often spans quarters. We provide a phased roadmap after discovery, not before.',
      },
      {
        question: 'What happens during discovery?',
        answer:
          'Discovery maps users, workflows, data models, integrations, and non-functional requirements. Deliverables typically include a prioritized backlog, architecture direction, risk register, and a recommended phasing plan with milestone definitions.',
      },
      {
        question: 'Can you deliver in phases rather than one big launch?',
        answer:
          'Phased delivery is our default. We identify the smallest slice that proves value, often an internal operator tool or a limited customer cohort, and expand from a stable core rather than betting everything on a single cutover.',
      },
      {
        question: 'How do you handle changing requirements?',
        answer:
          'We expect product learning after real usage. Change is managed through transparent backlog reprioritization, impact assessment on architecture and timelines, and agreement on what moves out of the current phase versus a follow-on increment.',
      },
      {
        question: 'What slows projects down most often?',
        answer:
          'Unclear decision ownership, late integration access, and underestimated compliance or data migration work are the usual culprits. We surface these early in discovery so stakeholders can resolve them before build velocity matters.',
      },
      {
        question: 'Do you offer ongoing delivery after launch?',
        answer:
          'Many clients retain a squad for iteration, reliability work, and new modules. Continuation terms are scoped to a rolling backlog and agreed capacity rather than an open-ended retainer without outcomes.',
      },
    ],
  },
  {
    id: 'pricing-and-engagement',
    title: 'Pricing and engagement models',
    items: [
      {
        question: 'How does Codeaxes price projects?',
        answer:
          'We do not publish fixed price lists because meaningful work varies with integrations, compliance, and existing technical debt. After scoping, we propose pricing tied to an engagement model, time-and-materials squad, milestone-based phases, or hybrid structures for discovery plus delivery.',
      },
      {
        question: 'What engagement models do you offer?',
        answer:
          'Discovery engagements clarify scope and architecture before major build spend. Dedicated squads provide ongoing design, engineering, and QA capacity aligned to your roadmap. Product partnerships suit longer horizons where Codeaxes shares accountability for outcomes across multiple releases.',
      },
      {
        question: 'Is discovery billed separately?',
        answer:
          'Discovery is often a distinct, bounded phase with its own deliverables and fee. It reduces downstream rework and gives both sides a shared basis for estimating build phases. For smaller, well-defined scopes, discovery may fold into the first delivery increment.',
      },
      {
        question: 'Do you work on fixed-scope fixed-price contracts?',
        answer:
          'We can when requirements, integrations, and acceptance criteria are stable enough to fix scope. For novel or regulated products we usually recommend phased contracts so learning from early releases informs later estimates.',
      },
      {
        question: 'What is included in a dedicated squad?',
        answer:
          'A squad typically includes engineering leadership, full-stack or specialized engineers, QA, and design collaboration as needed. Composition adjusts to your stack and gaps, mobile-heavy products weight iOS and Android; data-heavy products weight pipeline and analytics skills.',
      },
      {
        question: 'When will we receive a formal estimate?',
        answer:
          'After discovery or a technical review of your materials, brief, existing codebase, and integration list. Estimates describe assumptions, exclusions, phasing, and what would trigger a re-estimate so there are no surprise conversations mid-sprint.',
      },
    ],
  },
  {
    id: 'ai-automation',
    title: 'AI automation',
    items: [
      {
        question: 'What kind of AI automation does Codeaxes build?',
        answer:
          'We build workflow automation, document processing pipelines, support triage, internal copilots, and decision-support tools grounded in your data and policies, not generic chat widgets pasted onto legacy forms.',
      },
      {
        question: 'How do you decide whether AI is appropriate?',
        answer:
          'We evaluate task frequency, error cost, data availability, and human review requirements. If a deterministic rules engine or better UX solves the problem, we say so. AI enters when ambiguity, language, or unstructured inputs make classical automation brittle.',
      },
      {
        question: 'How do you handle hallucinations and unsafe outputs?',
        answer:
          'Production systems use retrieval over approved sources, structured outputs, validation layers, and human-in-the-loop review for high-stakes decisions. We design fallbacks when confidence is low and log prompts and responses for audit where required.',
      },
      {
        question: 'Can you integrate with our existing LLM vendor?',
        answer:
          'Yes. We work with major cloud model APIs and self-hosted options where data residency demands it. Architecture keeps vendor swap feasible through abstraction at the orchestration layer.',
      },
      {
        question: 'What data do you need to get started?',
        answer:
          'Representative documents, ticket histories, or workflow examples, sanitized if necessary, plus clarity on what “correct” looks like and who approves edge cases. We never assume production data access on day one.',
      },
      {
        question: 'How is AI work priced?',
        answer:
          'Pricing reflects integration depth, evaluation harness design, and ongoing inference costs, not token counts on a public rate card. We estimate after understanding volume, latency targets, and review workflows.',
      },
    ],
  },
  {
    id: 'web-and-mobile',
    title: 'Web and mobile development',
    items: [
      {
        question: 'Do you build web apps, mobile apps, or both?',
        answer:
          'Both. We choose native, cross-platform, or responsive web based on offline needs, device capabilities, release cadence, and team maintenance capacity, not ideology.',
      },
      {
        question: 'Which mobile approach do you recommend?',
        answer:
          'Native Swift and Kotlin when platform APIs, performance, or long-term platform features dominate. React Native or Flutter when shared logic and faster iteration outweigh platform-specific polish. We document trade-offs for your specific product.',
      },
      {
        question: 'How do you approach accessibility?',
        answer:
          'Accessibility is part of definition of done: semantic markup, keyboard flows, contrast, screen reader labels, and testing with assistive technology on critical journeys. Regulated and public-facing products receive stricter checkpoints.',
      },
      {
        question: 'Can you redesign an existing app without a full rewrite?',
        answer:
          'Often yes, via strangler patterns: new surfaces on modern stacks, shared APIs, and phased retirement of legacy UI. We assess whether the backend can carry the new experience or needs hardening first.',
      },
      {
        question: 'How do you handle app store releases?',
        answer:
          'We set up signing, CI pipelines, staged rollouts, crash reporting, and release notes workflows. Mobile releases are planned alongside backend compatibility and feature flags where instant rollback is needed.',
      },
    ],
  },
  {
    id: 'saas-and-paas',
    title: 'SaaS and PaaS development',
    items: [
      {
        question: 'What is the difference between SaaS and PaaS work at Codeaxes?',
        answer:
          'SaaS engagements focus on end-customer products, tenancy, billing, onboarding, and product analytics. PaaS engagements emphasize platforms other builders extend: APIs, developer portals, usage metering, and sandbox environments.',
      },
      {
        question: 'How do you design multi-tenancy?',
        answer:
          'We select isolation models, shared schema with tenant keys, schema-per-tenant, or dedicated resources, for your compliance, scale, and operational cost profile. The choice is documented and tested, not accidental.',
      },
      {
        question: 'Do you implement billing and subscriptions?',
        answer:
          'We integrate with established billing providers and implement entitlement logic in your product layer. Complex usage-based models receive metering pipelines and reconciliation tooling so finance and product see the same numbers.',
      },
      {
        question: 'Can you build a developer portal and public API?',
        answer:
          'Yes. That includes authentication, rate limits, versioning, SDKs, sandbox keys, and documentation generated from OpenAPI or equivalent contracts so partners are not guessing at behavior.',
      },
      {
        question: 'How do you plan for scale before it arrives?',
        answer:
          'Load testing on critical paths, database indexing strategy, caching boundaries, and observability SLOs are part of early architecture, not post-launch firefighting. We scale infrastructure with measured bottlenecks, not premature complexity.',
      },
      {
        question: 'What does a SaaS MVP include?',
        answer:
          'At minimum: secure auth, core workflow, admin visibility, deployment pipeline, and analytics on activation, not every enterprise checkbox. Discovery defines which enterprise requirements belong in v1 versus a fast-follow enterprise tier.',
      },
    ],
  },
  {
    id: 'qa-and-maintenance',
    title: 'QA and maintenance',
    items: [
      {
        question: 'How does Codeaxes approach quality assurance?',
        answer:
          'QA is embedded in delivery: unit and integration tests on critical logic, contract tests for integrations, exploratory testing on user journeys, and automated regression on release candidates. Definition of done includes test evidence, not a separate QA phase at the end.',
      },
      {
        question: 'Do you offer QA-only engagements?',
        answer:
          'We can augment teams with QA engineers who build automation frameworks, improve release gates, and document test strategies. Lasting impact usually requires collaboration with engineering on testability and CI integration.',
      },
      {
        question: 'What happens after launch?',
        answer:
          'Maintenance covers defect triage, dependency updates, performance tuning, and small enhancements. We prefer structured retainers with a visible backlog rather than ad-hoc hourly firefighting without priorities.',
      },
      {
        question: 'How do you handle production incidents?',
        answer:
          'We establish on-call runbooks, alerting, and escalation paths during launch readiness. For retained clients, response expectations, hours, severity tiers, are agreed in advance rather than assumed.',
      },
      {
        question: 'Can you improve an app with high defect volume?',
        answer:
          'Yes, starting with defect taxonomy, flaky test cleanup, and stabilizing the noisiest modules. We balance stopping bleeding with continuing necessary feature work so the product does not stall.',
      },
      {
        question: 'How is maintenance priced?',
        answer:
          'Maintenance is scoped to agreed capacity and service levels after we understand system complexity and incident history. Estimates follow a technical review, we do not quote flat monthly fees without context.',
      },
    ],
  },
  {
    id: 'blockchain-data-and-cloud',
    title: 'Blockchain, data, cloud, and DevOps',
    items: [
      {
        question: 'Do you build production blockchain products or only prototypes?',
        answer:
          'We ship contracts, wallets, and the off-chain systems around them, with tests and an upgrade or freeze policy. A demo contract without keys, indexing, or incident runbooks is not a complete engagement.',
      },
      {
        question: 'What is Project Data at Codeaxes?',
        answer:
          'It is the warehouse, pipeline, and metric layer for how a product or program is performing. We model grain, tests, and owners so teams stop arguing from disconnected spreadsheets. It is not the same as AI automation, though automation often depends on this layer.',
      },
      {
        question: 'Do you migrate workloads to AWS, Google Cloud, or Azure?',
        answer:
          'Yes. Cloud computing covers landing zones, identity, sequenced migration, recovery tests, and FinOps. We will not default to Kubernetes if a managed container or serverless shape fits the workload and the team.',
      },
      {
        question: 'How do DevOps engagements differ from cloud or QA work?',
        answer:
          'Cloud is where systems run. DevOps is how code gets there and how you see it: pipelines, IaC, secrets, promotion, and alerts. QA designs the cases and risk coverage those pipelines should enforce. They complement each other.',
      },
      {
        question: 'Can you take over an existing Terraform or CI setup?',
        answer:
          'Usually. We start with how a real release happens today, including unofficial steps, then stabilize state, secrets, and flaky jobs before adding platform features.',
      },
    ],
  },
  {
    id: 'games-and-animation',
    title: 'Games and 2D animation',
    items: [
      {
        question: 'What kinds of games do you build?',
        answer:
          'Product games, serious games, and interactive experiences with a pipeline more than one person can maintain. We are explicit when a request is actually a large cinematic Unreal production, that is a different shape of team.',
      },
      {
        question: 'Do 2D animations ship inside the product?',
        answer:
          'That is the point. We deliver Lottie, Rive, Spine, or sprites with runtime integration, performance budgets, and reduced-motion fallbacks. Campaign films that never enter the product are a Kuroaxe conversation.',
      },
      {
        question: 'Can our artists keep working in After Effects?',
        answer:
          'Yes, with export presets into a runtime the app can play. If the composition cannot loop, localize, or stay under budget, we flag that before a full production pass.',
      },
      {
        question: 'Do you handle store submission for games?',
        answer:
          'Yes. Signing, ratings, platform SDKs, and a first-patch process are part of game delivery, not a surprise in the last week.',
      },
    ],
  },
  {
    id: 'security-and-ownership',
    title: 'Security and ownership',
    items: [
      {
        question: 'Who owns the code and intellectual property?',
        answer:
          'You do. Contracts assign deliverable IP to your organization upon payment unless otherwise agreed for pre-existing Codeaxes tooling licensed separately. Repositories live in your accounts when possible.',
      },
      {
        question: 'How do you handle credentials and secrets?',
        answer:
          'Secrets are stored in managed vaults, rotated per policy, and never committed to source control. Access follows least privilege with separate credentials per environment.',
      },
      {
        question: 'Do you sign NDAs and security questionnaires?',
        answer:
          'Yes. We routinely complete vendor security reviews and provide architecture summaries, data flow diagrams, and subprocessors lists as needed for procurement.',
      },
      {
        question: 'Where is data hosted?',
        answer:
          'Hosting follows your requirements, major cloud regions, single-tenant deployments, or hybrid models. We document data residency, backup strategy, and encryption standards in the architecture pack.',
      },
      {
        question: 'How do you approach secure SDLC practices?',
        answer:
          'Dependency scanning, code review, branch protection, environment promotion gates, and penetration test remediation support are standard. Regulated clients receive additional controls aligned to their framework, SOC 2, HIPAA-minded, or PCI scope reduction.',
      },
      {
        question: 'What happens if we pause or end the engagement?',
        answer:
          'You retain all work product, documentation, and credentials. We provide a structured handoff: architecture overview, open issues, deployment steps, and optional transition support so your team or another vendor can continue without guesswork.',
      },
    ],
  },
];

export const allFaqs = faqCategories.flatMap((category) =>
  category.items.map((item) => ({
    categoryId: category.id,
    categoryTitle: category.title,
    question: item.question,
    answer: item.answer,
  })),
);
