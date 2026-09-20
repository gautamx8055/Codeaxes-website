import { site } from './site';
import type { NavItem } from '../types';

export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'AI Automation', href: '/services/ai-automation', description: 'Workflows, assistants, and knowledge systems' },
      { label: 'Mobile Apps', href: '/services/mobile-apps', description: 'iOS, Android, and cross-platform products' },
      { label: 'SaaS Development', href: '/services/saas-development', description: 'Multi-tenant platforms and billing' },
      { label: 'PaaS Development', href: '/services/paas-development', description: 'Developer platforms and APIs' },
      { label: 'QA Testing', href: '/services/qa-testing', description: 'Manual, automated, and performance quality' },
      { label: 'Custom Development', href: '/services/custom-development', description: 'Web, APIs, and modernization' },
      { label: 'Product Development', href: '/services/product-development', description: 'From discovery through launch' },
      { label: 'Blockchain', href: '/services/blockchain', description: 'Contracts, wallets, and on-chain products' },
      { label: 'Project Data', href: '/services/project-data', description: 'Pipelines, warehouses, and analytics' },
      { label: 'Game Development', href: '/services/game-development', description: 'Unity, live ops, and store-ready builds' },
      { label: 'Cloud Computing', href: '/services/cloud-computing', description: 'Landing zones, migration, and FinOps' },
      { label: '2D Animations', href: '/services/2d-animations', description: 'Product motion, Lottie, and Rive' },
      { label: 'DevOps', href: '/services/devops', description: 'CI/CD, GitOps, and platform reliability' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Clients', href: '/about/clients', description: 'Engagements across industries' },
      { label: 'Testimonials', href: '/about/testimonials', description: 'How teams describe working with us' },
      { label: 'Case Studies', href: '/about/case-studies', description: 'Problems, systems, and outcomes' },
      { label: 'Industries', href: '/about/industries', description: 'Where we build' },
      { label: 'Technologies', href: '/about/technologies', description: 'The Codeaxes stack' },
    ],
  },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
  {
    label: 'Kuroaxe',
    href: site.kuroaxe.url,
    external: true,
    note: site.kuroaxe.label,
  },
];

export const footerNav = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Clients', href: '/about/clients' },
    { label: 'Testimonials', href: '/about/testimonials' },
    { label: 'Case studies', href: '/about/case-studies' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'All services', href: '/services' },
    { label: 'AI automation', href: '/services/ai-automation' },
    { label: 'Mobile apps', href: '/services/mobile-apps' },
    { label: 'SaaS development', href: '/services/saas-development' },
    { label: 'PaaS development', href: '/services/paas-development' },
    { label: 'QA testing', href: '/services/qa-testing' },
    { label: 'Custom development', href: '/services/custom-development' },
    { label: 'Product development', href: '/services/product-development' },
    { label: 'Blockchain', href: '/services/blockchain' },
    { label: 'Project data', href: '/services/project-data' },
    { label: 'Game development', href: '/services/game-development' },
    { label: 'Cloud computing', href: '/services/cloud-computing' },
    { label: '2D animations', href: '/services/2d-animations' },
    { label: 'DevOps', href: '/services/devops' },
  ],
  resources: [
    { label: 'Industries', href: '/about/industries' },
    { label: 'Technologies', href: '/about/technologies' },
    { label: 'FAQ', href: '/faq' },
    { label: site.kuroaxe.name, href: site.kuroaxe.url, external: true },
  ],
};
