import React, { ReactNode } from 'react';
import Resume from '../Portfolio/Resume/Resume';
import { useRouter } from 'next/router';
import Terminal from '../Apps/Terminal/Terminal';
import { siteProfile } from '../../config/siteProfile';

/**
 * Custom hook that returns prepared recommended apps config
 *@function useRecommendedConfig
 *@returns {IRecommendedFile[]} recommendedFiles - objects to be mapped into list of recommended files and apps
 */
export const useRecommendedConfig = (): {
  recommendedFiles: IRecommendedFile[];
} => {
  const router = useRouter();
  const recommendedFiles: IRecommendedFile[] = [
    {
      id: 1,
      fileName: 'GitHub',
      details: 'Open source and projects',
      icon: '/assets/icons/startmenu/github.svg',
      action: () => window.open(siteProfile.githubUrl, '_blank'),
      iconSize: { height: 44, width: 44 },
      willOpenWindowWith: null,
    },
    {
      id: 2,
      fileName: 'Anouar_Mohamed_CV',
      details: 'Cloud-native DevSecOps resume',
      icon: '/assets/icons/recommended/word.png',
      action: null,
      iconSize: { height: 40, width: 40 },
      willOpenWindowWith: <Resume />,
    },
    {
      id: 3,
      fileName: 'My Portfolio',
      details: 'Anouar Mohamed',
      icon: '/assets/portfolio/skills/react-original.svg',
      action: () => router.push('/portfolio'),
      iconSize: { height: 40, width: 40 },
      willOpenWindowWith: null,
    },
    {
      id: 4,
      fileName: 'Recent Projects',
      details: 'Kubernetes and DevSecOps work',
      icon: '/assets/icons/recommended/power-point.png',
      action: () => router.push('/portfolio/projects'),
      iconSize: { height: 40, width: 40 },
      willOpenWindowWith: null,
    },
    {
      id: 5,
      fileName: 'KubeLens AI',
      details: 'Kubernetes diagnostics project',
      icon: '/assets/portfolio/skills/developer.png',
      action: () =>
        window.open('https://github.com/AnouarMohamed/KubLens-AI', '_blank'),
      iconSize: { height: 40, width: 40 },
      willOpenWindowWith: null,
    },
    {
      id: 6,
      fileName: 'StateSight',
      details: 'GitOps forensics project',
      icon: '/assets/portfolio/skills/git-original.svg',
      action: () =>
        window.open('https://github.com/AnouarMohamed/StateSight', '_blank'),
      iconSize: { height: 40, width: 40 },
      willOpenWindowWith: null,
    },
    {
      id: 7,
      fileName: 'Nodewright',
      details: 'Open-source contribution',
      icon: '/assets/portfolio/skills/developer.png',
      action: () =>
        window.open('https://github.com/NVIDIA/nodewright', '_blank'),
      iconSize: { height: 40, width: 40 },
      willOpenWindowWith: null,
    },
    {
      id: 8,
      fileName: 'Terminal',
      details: 'Recently added',
      icon: '/assets/icons/recommended/terminal.png',
      action: null,
      iconSize: { height: 38, width: 38 },
      willOpenWindowWith: <Terminal />,
    },
  ];

  return {
    recommendedFiles,
  };
};

interface IRecommendedFile {
  id: number;
  fileName: string;
  details: string;
  icon: string;
  action: (() => void) | null;
  iconSize: { height: number; width: number };
  willOpenWindowWith: null | ReactNode;
}
