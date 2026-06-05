import { ReactNode } from 'react';

export interface IHighlightedProject {
  slideNumberImg?: string;
  projectTitle: string;
  projectDescription: string;
  projectImg: string;
  projectMobileImg: string;
  projectVisualType?: 'screenshot' | 'icon';
  projectStatus?: string;
  projectHighlights?: string[];
  projectTechnologies: string[];
  technologyIcons: ReactNode[];
  projectDetailsQuotes?: ICarouselQuote[];
  projectDetailImages?: string[];
  projectDetailTools?: string[];
  slideBgColor: string;
  slideHeight: string;
  githubLink?: string;
  liveLink: string;
}

export interface ICarouselQuote {
  id: number;
  title: string;
  quote: string;
}
