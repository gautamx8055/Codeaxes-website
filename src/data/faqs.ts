import type { FaqCategory } from '../types';
import { serviceGroups, getService } from './services';

const generalCategories: FaqCategory[] = [
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

const practiceQuestions: Record<string, { question: string; answer: string }> = {
  'ai-first': { question: 'How do you choose between predictive AI, generative AI, and agents?', answer: 'Start with the task and the evidence of success. Predictive models estimate outcomes, generative models produce content, and agents coordinate actions across tools. Data readiness, evaluation, permissions, and human review shape the choice.' },
  'product-engineering': { question: 'Can a product include web, mobile, and enterprise integrations?', answer: 'Yes. We define shared identity, data ownership, and API contracts before implementing the web, mobile, and platform surfaces. The delivery plan follows the dependencies between them.' },
  enterprise: { question: 'Can you modernise systems without replacing everything at once?', answer: 'We assess dependencies and business continuity first, then sequence configuration, integration, refactoring, or replacement. Migration, reconciliation, parallel operation, and rollback are planned for the affected systems.' },
  'experience-design': { question: 'How does design connect to engineering?', answer: 'Research and prototypes inform the product scope. Design decisions are documented as interaction states, component rules, accessibility requirements, and specifications that engineering can implement and review.' },
  'digital-engineering': { question: 'How do cloud, security, DevOps, MLOps, and quality work together?', answer: 'Cloud provides the operating foundation; security defines trust and controls; DevOps and MLOps govern how software and models reach production; quality engineering supplies the evidence used for release decisions.' },
  'advanced-engineering': { question: 'How do you validate systems that interact with hardware?', answer: 'Define the operating environment and system boundaries first. Use simulation, integration testing, hardware/software validation, and controlled trials appropriate to the system, with failure modes and handover requirements agreed in the project scope.' },
};

export const faqCategories: FaqCategory[] = [
  ...generalCategories.filter((category) => category.id !== 'security-and-ownership'),
  ...serviceGroups.map((group) => ({
    id: group.id,
    title: group.name,
    items: [
      { question: `What does ${group.name} cover?`, answer: `${group.summary} Services include ${group.services.map((service) => service.name).join('; ')}.` },
      practiceQuestions[group.id],
    ],
  })),
  ...generalCategories.filter((category) => category.id === 'security-and-ownership'),
];

export const legacyFaqCategories: Record<string, string> = {
  'ai-automation': 'ai-first',
  'web-and-mobile': 'product-engineering',
  'saas-and-paas': 'product-engineering',
  'qa-and-maintenance': 'digital-engineering',
  'blockchain-data-and-cloud': 'digital-engineering',
  'games-and-animation': 'experience-design',
};

export function extraFaqsForService(slug: string) {
  const service = getService(slug);
  return service ? faqCategories.find((category) => category.id === service.groupId)?.items ?? [] : [];
}

export const allFaqs = faqCategories.flatMap((category) =>
  category.items.map((item) => ({ categoryId: category.id, categoryTitle: category.title, ...item })),
);
