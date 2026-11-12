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
  | 'artificial-intelligence'
  | 'generative-ai-llm-engineering'
  | 'agentic-ai-ai-automation'
  | 'data-transformation'
  | 'data-analytics-intelligence'
  | 'software-engineering'
  | 'web-application-development'
  | 'mobile-application-development'
  | 'saas-platform-engineering'
  | 'api-development-system-integration'
  | 'enterprise-product-development'
  | 'enterprise-solutions'
  | 'erp-crm-solutions'
  | 'digital-transformation'
  | 'platform-modernisation'
  | 'managed-engineering-services'
  | 'ui-ux-design'
  | 'product-design'
  | 'research-insights'
  | 'service-design'
  | '3d-digital-experience'
  | 'cloud-engineering'
  | 'cybersecurity-digital-trust'
  | 'devops-mlops'
  | 'quality-engineering'
  | 'digital-platforms-integration'
  | 'industrial-iot-industry-4-0'
  | 'embedded-systems-firmware-engineering'
  | 'industrial-automation-robotics'
  | 'digital-twins-simulation'
  | 'drones-autonomous-systems';

export type ServiceGroupId = 'ai-first' | 'product-engineering' | 'enterprise' | 'experience-design' | 'digital-engineering' | 'advanced-engineering';

export type Service = {
  slug: ServiceSlug;
  name: string;
  groupId: ServiceGroupId;
  summary: string;
  capabilities: { title: string; body: string }[];
  stack: string[];
  visual: 'workflow' | 'devices' | 'dashboard' | 'architecture' | 'pipeline' | 'systems' | 'lifecycle';
};

export type Industry = {
  slug: string;
  name: string;
  summary: string;
  solutions: string[];
};

export type TechCategory =
  | 'programming-languages-core-technologies'
  | 'frontend-web-technologies'
  | 'backend-application-frameworks'
  | 'mobile-application-technologies'
  | 'artificial-intelligence-machine-learning'
  | 'generative-ai-llm-agentic-ai'
  | 'data-engineering-analytics'
  | 'databases-data-storage'
  | 'cloud-computing-infrastructure'
  | 'devops-platform-engineering'
  | 'api-middleware-enterprise-integration'
  | 'enterprise-platforms-business-systems'
  | 'cybersecurity-digital-trust'
  | 'blockchain-distributed-ledger-technologies'
  | 'internet-of-things-industrial-connectivity'
  | 'embedded-systems-firmware-engineering'
  | 'robotics-drones-autonomous-systems'
  | 'digital-twins-simulation-spatial-computing'
  | 'automotive-mobility-engineering'
  | 'semiconductor-electronics-engineering'
  | 'testing-validation-quality-engineering'
  | 'product-design-engineering-tools'
  | 'quantum-advanced-computing'
  | 'major-technology-ecosystems';

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
  externalId?: string;
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
