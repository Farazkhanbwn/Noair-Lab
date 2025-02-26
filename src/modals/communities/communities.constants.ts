import LockIcon from '@/components/icons/user/communities/lock-icon';
import { AccessLevel } from './communities.types';
import GlobeIcon from '@/components/icons/user/communities/globe-icon';
import EyeIcon from '@/components/icons/user/communities/eye-icon';

export const COMMUNITY_SELECTION_TOPICS = {
  research: {
    title: 'Research & Development',
    topics: [
      'Modeling',
      'Data Collection',
      'Analytics',
      'Fieldwork & Sampling',
      'Patents',
      'Laws & Regulations',
      'Reports & Assessments',
    ],
  },
  scientific: {
    title: 'Scientific Breakthroughs',
    topics: [
      'Biodiversity',
      'Greenhouse Effects',
      'Air Quality',
      'Business News & Discussions',
      'Global Warming',
      'Extreme Weather',
    ],
  },
  engineering: {
    title: 'Engineering Breakthroughs',
    topics: [
      'Carbon sequestration',
      'Ghg capture',
      'Stratospheric Aerosol Injection',
      'Materials',
      'Computational Methods',
      'Ocean Fertilization',
      'Energy Efficiency',
    ],
  },
};

export const COMMUNITY_ACCESS_OPTIONS = [
  {
    id: 'public' as AccessLevel,
    icon: GlobeIcon,
    title: 'Public',
    description: 'Anyone can view, post and comment to this community',
  },
  {
    id: 'restricted' as AccessLevel,
    icon: EyeIcon,
    title: 'Restricted',
    description: 'Anyone can view but only restricted people can contribute',
  },
  {
    id: 'private' as AccessLevel,
    icon: LockIcon,
    title: 'Private',
    description: "Only approved user's can view and contribute",
  },
];
