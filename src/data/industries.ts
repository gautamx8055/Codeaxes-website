import type { Industry } from '../types';
import { industryCatalogue } from './catalogue';

const summaries: Record<string, string> = {
  'aerospace-defence': 'Aircraft systems, digital engineering, fleet intelligence, and mission-critical platforms.',
  'appliances-consumer-goods': 'Connected products, smart appliance ecosystems, and lifecycle intelligence.',
  'automotive-mobility': 'Software-defined vehicles, electrification, connected mobility, and virtual validation.',
  'banking-financial-services': 'Modern banking, payments, financial data, and trusted digital operations.',
  'communications-telecom': 'Advanced networks, telecom cloud, autonomous operations, and resilient connectivity.',
  'construction-infrastructure': 'Digital engineering, infrastructure twins, and connected asset lifecycles.',
  'education-edtech': 'Enterprise learning, adaptive experiences, skills intelligence, and assessment platforms.',
  'energy-utilities': 'Grid modernisation, renewable systems, energy intelligence, and asset performance.',
  'healthcare-life-sciences': 'Medical devices, digital health, clinical intelligence, and connected research systems.',
  insurance: 'Core platform modernisation, intelligent claims, underwriting, and enterprise data.',
  'industrial-manufacturing': 'Smart factories, industrial AI, connected operations, and asset reliability.',
  'logistics-supply-chain': 'Connected supply chains, intelligent logistics, warehousing, and transportation operations.',
  'media-entertainment': 'Media platforms, automated content workflows, immersive production, and experience engineering.',
  'mining-oil-gas': 'Autonomous operations, digital assets, process intelligence, and remote control systems.',
  'rail-transportation': 'Rail systems, signalling, infrastructure twins, rolling stock, and maintenance intelligence.',
  'retail-e-commerce': 'Enterprise commerce, intelligent retail operations, customer data, and connected stores.',
  'semiconductor-electronics': 'Silicon, embedded products, verification, manufacturing intelligence, and edge devices.',
  'agriculture-food': 'Precision agriculture, autonomous machinery, food manufacturing, and traceable supply chains.',
};

export const industries: Industry[] = industryCatalogue.map((industry) => ({
  ...industry,
  summary: summaries[industry.slug],
}));

// Fragment compatibility for links published before the enterprise catalogue.
export const legacyIndustryAnchors: Record<string, string> = {
  'saas-technology': 'cross-industry-practices',
  healthcare: 'healthcare-life-sciences',
  fintech: 'banking-financial-services',
  ecommerce: 'retail-e-commerce',
  logistics: 'logistics-supply-chain',
  education: 'education-edtech',
  'real-estate': 'construction-infrastructure',
  media: 'media-entertainment',
  manufacturing: 'industrial-manufacturing',
};

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
