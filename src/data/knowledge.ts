import { site } from './site';
import { services, serviceGroups } from './services';
import { technologyCatalogue, engineeringPractices, catalogueCounts } from './catalogue';
import { industries } from './industries';
import { technologies } from './technologies';
import { faqCategories } from './faqs';
import { caseStudies } from './case-studies';
import { testimonials } from './testimonials';
import { clients } from './clients';
import { whyCodeaxes } from './why';
import { deliveryProcess } from './process';
import type { KnowledgeDoc } from '../types';

function join(parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(' ');
}

export function buildKnowledge(): KnowledgeDoc[] {
  const docs: KnowledgeDoc[] = [
    {
      id: 'company',
      title: 'Codeaxes',
      url: '/about',
      category: 'company',
      tags: ['codeaxes', 'about', 'company', 'product', 'engineering'],
      body: join([
        site.name,
        site.tagline,
        `Codeaxes connects ${serviceGroups.map((group) => group.name).join(', ')} across ${catalogueCounts.industries} industries.`,
        whyCodeaxes.map((item) => `${item.title}. ${item.body}`).join(' '),
        `Contact ${site.email}. ${site.kuroaxe.name} is a partner brand for marketing services at ${site.kuroaxe.absoluteUrl}.`,
      ]),
    },
    {
      id: 'careers',
      title: 'Careers at Codeaxes and Kuroaxe',
      url: '/careers',
      category: 'company',
      tags: ['careers', 'jobs', 'hiring', 'roles'],
      body: 'The Careers page lists two hiring tracks. Codeaxes posts product engineering roles. Kuroaxe, the marketing partner brand, posts marketing roles. Each posting is published from the hiring workspace and includes the team, location, workplace, and how to apply. If a matching role is not listed, send a note through Contact.',
    },
    {
      id: 'contact',
      title: 'Contact Codeaxes',
      url: '/contact',
      category: 'company',
      tags: ['contact', 'enquiry', 'project'],
      body: `Start a project with Codeaxes. Email ${site.email}. Phone ${site.phone}. ${site.address.line1}, ${site.address.city}. After you submit an enquiry we confirm receipt, schedule a discovery conversation, and return with a scoped approach.`,
    },
    {
      id: 'process',
      title: 'Delivery process',
      url: '/',
      category: 'company',
      tags: ['process', 'delivery', 'discover', 'build', 'launch'],
      body: deliveryProcess.map((step) => `${step.title}: ${step.body}`).join(' '),
    },
  ];

  for (const service of services) {
    docs.push({
      id: `service-${service.slug}`,
      title: service.name,
      url: `/services/${service.slug}`,
      category: 'service',
      tags: [service.name, service.slug, service.groupId, ...service.stack],
      body: join([
        service.summary,
        service.capabilities.map((item) => `${item.title}: ${item.body}`).join(' '),
      ]),
    });
  }

  for (const industry of industries) {
    docs.push({
      id: `industry-${industry.slug}`,
      title: industry.name,
      url: `/about/industries#${industry.slug}`,
      category: 'industry',
      tags: [industry.name, industry.slug],
      body: join([
        industry.summary,
        industry.solutions.join(' '),
      ]),
    });
  }

  for (const group of serviceGroups) {
    docs.push({
      id: `practice-${group.id}`, title: group.name, url: `/services#${group.id}`,
      category: 'service-group', tags: [group.name, ...group.services.map((service) => service.name)],
      body: `${group.summary} Services: ${group.services.map((service) => service.name).join('; ')}.`,
    });
  }

  docs.push({
    id: 'cross-industry-practices', title: 'Cross-Industry Enterprise Engineering Practices',
    url: '/about/industries#cross-industry-practices', category: 'industry',
    tags: ['cross-industry', 'practices', 'engineering'], body: engineeringPractices.join('. '),
  });

  for (const category of technologyCatalogue) {
    docs.push({
      id: `technology-category-${category.id}`, title: category.name,
      url: `/about/technologies#${category.id}`, category: 'technology', tags: [category.name],
      body: category.sections.map((section) => `${section.name ? `${section.name}: ` : ''}${section.items.join(', ')}.`).join(' '),
    });
  }

  for (const tech of technologies) {
    docs.push({
      id: `tech-${tech.slug}`,
      title: tech.name,
      url: `/about/technologies/${tech.slug}`,
      category: 'technology',
      tags: [tech.name, tech.category, ...tech.compatible],
      body: join([
        tech.summary,
        tech.what,
        tech.why,
        tech.useCases.join(' '),
        tech.benefits.join(' '),
        tech.limitations.join(' '),
        tech.applications.join(' '),
      ]),
    });
  }

  for (const category of faqCategories) {
    for (const item of category.items) {
      docs.push({
        id: `faq-${category.id}-${item.question.slice(0, 24)}`,
        title: item.question,
        url: `/faq#${category.id}`,
        category: 'faq',
        tags: [category.title, 'faq'],
        body: item.answer,
      });
    }
  }

  for (const study of caseStudies) {
    docs.push({
      id: `case-${study.slug}`,
      title: study.title,
      url: `/about/case-studies/${study.slug}`,
      category: 'case-study',
      tags: [study.industry, study.client, ...study.services, ...study.stack],
      body: join([
        study.summary,
        study.challenge,
        study.strategy,
        study.solution,
        study.features.join(' '),
        study.outcomes.map((item) => `${item.label} ${item.value}`).join(' '),
        study.quote,
      ]),
    });
  }

  for (const item of testimonials) {
    docs.push({
      id: `testimonial-${item.id}`,
      title: `${item.name}, ${item.company}`,
      url: '/about/testimonials',
      category: 'testimonial',
      tags: [item.company, item.projectType],
      body: `${item.quote} ${item.role} ${item.company} ${item.projectType}`,
    });
  }

  for (const client of clients) {
    docs.push({
      id: `client-${client.name}`,
      title: client.name,
      url: '/about/clients',
      category: 'client',
      tags: [client.sector, client.category],
      body: `${client.name} ${client.sector} ${client.engagement} ${client.outcome}`,
    });
  }

  return docs;
}

export const knowledge = buildKnowledge();
