export type NavChild = {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
};

export type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
  external?: boolean;
  note?: string;
};

export type ServiceSlug =
  | 'ai-automation'
  | 'mobile-apps'
  | 'saas-development'
  | 'paas-development'
  | 'qa-testing'
  | 'custom-development'
  | 'product-development'
  | 'blockchain'
  | 'project-data'
  | 'game-development'
  | 'cloud-computing'
  | '2d-animations'
  | 'devops';

export type Service = {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  explanation: string;
  problems: string[];
  capabilities: { title: string; body: string }[];
  deliverables: string[];
  process: { title: string; body: string }[];
  industries: string[];
  stack: string[];
  useCases: { title: string; body: string }[];
  benefits: string[];
  relatedCaseStudies: string[];
  faqs: { question: string; answer: string }[];
  visual: 'workflow' | 'devices' | 'dashboard' | 'architecture' | 'pipeline' | 'systems' | 'lifecycle';
};

export type Industry = {
  slug: string;
  name: string;
  summary: string;
  challenges: string[];
  solutions: string[];
  automation: string[];
  compliance?: string;
  techApproaches: string[];
  outcomes: string[];
};

export type TechCategory =
  | 'frontend'
  | 'backend'
  | 'mobile'
  | 'cloud'
  | 'data'
  | 'testing';

export type Technology = {
  slug: string;
  name: string;
  category: TechCategory;
  summary: string;
  what: string;
  why: string;
  useCases: string[];
  benefits: string[];
  limitations: string[];
  compatible: string[];
  applications: string[];
  relatedServices: ServiceSlug[];
};

export type Client = {
  name: string;
  sector: string;
  category: string;
  engagement: string;
  outcome: string;
  mark: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  projectType: string;
  metric?: string;
  metricLabel?: string;
  videoPlaceholder?: boolean;
};

export type ProcessStep = {
  id: string;
  title: string;
  body: string;
};

export type FaqCategory = {
  id: string;
  title: string;
  items: { question: string; answer: string }[];
};

export type KnowledgeDoc = {
  id: string;
  title: string;
  url: string;
  category: string;
  tags: string[];
  body: string;
};

export type JobEmploymentType = 'full-time' | 'part-time' | 'contract' | 'internship';
export type JobWorkplace = 'remote' | 'hybrid' | 'onsite';
export type JobStatus = 'draft' | 'open' | 'closed';
export type JobBrand = 'codeaxes' | 'kuroaxe';

export type Job = {
  id: string;
  slug: string;
  title: string;
  brand: JobBrand;
  department: string;
  location: string;
  employmentType: JobEmploymentType;
  workplace: JobWorkplace;
  summary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  compensation?: string;
  applyUrl?: string;
  applyEmail?: string;
  status: JobStatus;
  createdAt: string;
  updatedAt: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  services: ServiceSlug[];
  stack: string[];
  summary: string;
  challenge: string;
  strategy: string;
  solution: string;
  features: string[];
  outcomes: { label: string; value: string }[];
  quote: string;
  quoteName: string;
  quoteRole: string;
  related: string[];
  visual: 'dashboard' | 'devices' | 'architecture' | 'workflow';
  featured?: boolean;
};
