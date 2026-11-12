import { industries } from './industries';
import { site } from './site';
import { serviceGroups } from './services';
import type { NavItem } from '../types';

export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: serviceGroups.map((group) => ({
      label: group.name,
      href: `/services#${group.id}`,
      description: group.summary,
    })),
  },
  {
    label: 'Industries',
    href: '/about/industries',
    children: industries.map((industry) => ({
      label: industry.name,
      href: `/about/industries#${industry.slug}`,
    })),
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Clients', href: '/about/clients', description: 'Engagements across industries' },
      { label: 'Testimonials', href: '/about/testimonials', description: 'How teams describe working with us' },
      { label: 'Case Studies', href: '/about/case-studies', description: 'Problems, systems, and outcomes' },
      { label: 'Technologies', href: '/about/technologies', description: 'The Codeaxes stack' },
    ],
  },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
  {
    label: 'Kuroaxe',
    href: site.kuroaxe.url,
    note: site.kuroaxe.label,
  },
];

export const footerNav = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/about/industries' },
  { label: 'Technologies', href: '/about/technologies' },
  { label: 'Case studies', href: '/about/case-studies' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];
