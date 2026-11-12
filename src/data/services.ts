import { catalogueServiceGroups } from './catalogue';
import { serviceContent } from './service-content';
import type { Service, ServiceGroupId, ServiceSlug } from '../types';

const groupContent: Record<ServiceGroupId, { summary: string; visual: Service['visual'] }> = {
  'ai-first': {
    summary: 'AI, generative models, autonomous workflows, and the data foundations that turn intelligence into practical capability.',
    visual: 'workflow',
  },
  'product-engineering': {
    summary: 'Software, web, mobile, and enterprise products engineered from the first architecture decision through operation and scale.',
    visual: 'devices',
  },
  enterprise: {
    summary: 'Enterprise platforms, connected business systems, and modernisation programmes shaped around how your organization operates.',
    visual: 'architecture',
  },
  'experience-design': {
    summary: 'Research, product and service design, and digital experiences that connect human needs to engineering decisions.',
    visual: 'lifecycle',
  },
  'digital-engineering': {
    summary: 'Cloud, security, delivery automation, quality, and integration for dependable digital systems.',
    visual: 'pipeline',
  },
  'advanced-engineering': {
    summary: 'Connected industrial systems, embedded software, robotics, simulation, and autonomy across the physical and digital worlds.',
    visual: 'systems',
  },
};

export const serviceGroups = catalogueServiceGroups.map((group) => ({
  ...group,
  id: group.id as ServiceGroupId,
  ...groupContent[group.id as ServiceGroupId],
}));

export const services: Service[] = serviceGroups.flatMap((group) =>
  group.services.map((entry) => {
    const content = serviceContent[entry.slug];
    if (!content) throw new Error(`Missing service content: ${entry.slug}`);
    return {
      ...entry,
      slug: entry.slug as ServiceSlug,
      groupId: group.id,
      summary: content.summary,
      capabilities: content.capabilities.map(([title, body]) => ({ title, body })),
      stack: content.stack,
      visual: group.visual,
    };
  }),
);

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServicesByGroup(groupId: ServiceGroupId): Service[] {
  return services.filter((service) => service.groupId === groupId);
}

export const serviceSlugs = services.map((service) => service.slug);
