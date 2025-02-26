import { StaticImageData } from 'next/image';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface BioOverviewCard {
  logo: string;
  title: string;
  organization: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface BioOverviewSectionProps {
  title: string;
  items: Array<BioOverviewCard>;
}

export interface PortfolioCard {
  author: string;
  organization: string;
  date: string;
  content: string;
  image?: StaticImageData;
  citations: number;
  views: number;
}

export interface PortfolioSectionProps {
  title: string;
  items: PortfolioCard[];
}

export interface ContentCardProps {
  author: string;
  date: string;
  content: string;
  image: StaticImageData;
  likes: number;
  comments: number;
  shares: number;
}
