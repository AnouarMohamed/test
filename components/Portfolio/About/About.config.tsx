import React, { ReactNode } from 'react';
import { FiGithub } from 'react-icons/fi';
import {
  SiAmazonaws,
  SiDocker,
  SiFastapi,
  SiGithubactions,
  SiGo,
  SiJava,
  SiKubernetes,
  SiNginx,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiTypescript,
} from 'react-icons/si';

export const useAboutConfig = (): {
  frontendSkills: ISkill[];
  backendSkills: ISkill[];
  frontendTechSkills: ITechSkill[];
  backendTechSkills: ITechSkill[];
  sideNavigationData: IScrollNavLink[];
} => {
  const frontendSkills: ISkill[] = [
    {
      id: 1,
      text: 'Kubernetes',
      icon: <SiKubernetes />,
      iconSize: { height: 50, width: 50 },
    },
    {
      id: 2,
      text: 'Docker',
      icon: <SiDocker />,
      iconSize: { height: 50, width: 50 },
    },
    {
      id: 3,
      text: 'GitHub Actions',
      icon: <SiGithubactions />,
      iconSize: { height: 50, width: 50 },
    },
    {
      id: 4,
      text: 'Go',
      icon: <SiGo />,
      iconSize: { height: 55, width: 55 },
    },
    {
      id: 5,
      text: 'TypeScript',
      icon: <SiTypescript />,
      iconSize: { height: 55, width: 55 },
    },
    {
      id: 6,
      text: 'Python',
      icon: <SiPython />,
      iconSize: { height: 50, width: 50 },
    },
    {
      id: 7,
      text: 'Java',
      icon: <SiJava />,
      iconSize: { height: 50, width: 50 },
    },
  ];

  const backendSkills: ISkill[] = [
    {
      id: 1,
      text: 'React',
      icon: <SiReact />,
      iconSize: { height: 50, width: 50 },
    },
    {
      id: 2,
      text: 'FastAPI',
      icon: <SiFastapi />,
      iconSize: { height: 50, width: 50 },
    },
    {
      id: 3,
      text: 'Spring Boot',
      icon: <SiSpringboot />,
      iconSize: { height: 50, width: 50 },
    },
    {
      id: 4,
      text: 'PostgreSQL',
      icon: <SiPostgresql />,
      iconSize: { height: 50, width: 50 },
    },
    {
      id: 5,
      text: 'Redis',
      icon: <SiRedis />,
      iconSize: { height: 50, width: 50 },
    },
    {
      id: 6,
      text: 'Nginx',
      icon: <SiNginx />,
      iconSize: { height: 50, width: 50 },
    },
    {
      id: 7,
      text: 'AWS',
      icon: <SiAmazonaws />,
      iconSize: { height: 50, width: 50 },
    },
  ];

  const frontendTechSkills: ITechSkill[] = [
    {
      id: 1,
      skillSection: 'Cloud-native',
      skillValue: 'Kubernetes, Helm, Kustomize, Docker Swarm',
    },
    {
      id: 2,
      skillSection: 'DevSecOps',
      skillValue: 'GitHub Actions, CodeQL, Trivy, OWASP, RBAC',
    },
    {
      id: 3,
      skillSection: 'Observability',
      skillValue: 'Prometheus, Grafana, Jaeger, Zabbix, uptime checks',
    },
    {
      id: 4,
      skillSection: 'Infrastructure',
      skillValue: 'Linux, AWS, Nginx, Traefik, Portainer',
    },
    {
      id: 5,
      skillSection: 'Open source',
      skillValue: 'Nodewright, Kubernetes, BigWheels, GKE policy',
    },
    {
      id: 6,
      skillSection: 'Security',
      skillValue: 'TLS, audit logs, secrets, dependency control',
    },
  ];

  const backendTechSkills: ITechSkill[] = [
    {
      id: 1,
      skillSection: 'Languages',
      skillValue: 'Go, Python, Java, TypeScript',
    },
    {
      id: 2,
      skillSection: 'Backend',
      skillValue: 'FastAPI, Spring Boot, Gin, APIs',
    },
    {
      id: 3,
      skillSection: 'Databases',
      skillValue: 'PostgreSQL, Redis, MongoDB, MySQL',
    },
    {
      id: 4,
      skillSection: 'Frontend',
      skillValue: 'React, Vite, Next.js, Angular',
    },
    {
      id: 5,
      skillSection: 'Operations',
      skillValue: 'Incidents, runbooks, deployment docs, audit trails',
    },
  ];

  const sideNavigationData: IScrollNavLink[] = [
    {
      id: 1,
      icon: <FiGithub className={'scroll-nav-icon'} />,
      hiddenText: 'Second Slide',
      anchorID: 'first-slide',
    },
    {
      id: 2,
      icon: <FiGithub className={'scroll-nav-icon'} />,
      hiddenText: 'Second Slide',
      anchorID: 'second-slide',
    },
    {
      id: 3,
      icon: <FiGithub className={'scroll-nav-icon'} />,
      hiddenText: 'Second Slide',
      anchorID: 'third-slide',
    },
    {
      id: 4,
      icon: <FiGithub className={'scroll-nav-icon'} />,
      hiddenText: 'Second Slide',
      anchorID: 'fourth-slide',
    },
    {
      id: 5,
      icon: <FiGithub className={'scroll-nav-icon'} />,
      hiddenText: 'Second Slide',
      anchorID: 'fifth-slide',
    },
  ];
  return {
    frontendSkills,
    backendSkills,
    frontendTechSkills,
    backendTechSkills,
    sideNavigationData,
  };
};

export interface ISkill {
  id: number;
  iconSrc?: string;
  icon?: ReactNode;
  text: string;
  iconSize: { width: number; height: number };
}

export interface ITechSkill {
  id: number;
  skillSection: string;
  skillValue: string;
}

export interface IScrollNavLink {
  id: number;
  icon: ReactNode;
  hiddenText: string;
  anchorID: string;
}
