import type { ProcessStep } from '../types';

export const deliveryProcess: ProcessStep[] = [
  {
    id: 'discover',
    title: 'Discover',
    body: 'Map the current system, users, constraints, and the decision that the product must make possible.',
  },
  {
    id: 'strategize',
    title: 'Strategize',
    body: 'Choose the smallest architecture that can carry the next three years of growth, not just the next release.',
  },
  {
    id: 'design',
    title: 'Design',
    body: 'Shape information architecture, interfaces, and service flows so operators and customers can move with certainty.',
  },
  {
    id: 'build',
    title: 'Build',
    body: 'Engineer services, data, and interfaces with tests as part of the definition of done, not as a late gate.',
  },
  {
    id: 'test',
    title: 'Test',
    body: 'Prove behavior across devices, load, access control, and the messy paths real users take.',
  },
  {
    id: 'launch',
    title: 'Launch',
    body: 'Ship behind observability, rollback, and a runbook the operating team can actually use.',
  },
  {
    id: 'scale',
    title: 'Scale',
    body: 'Tune cost, reliability, and product iteration after the first customers are live.',
  },
];
