import React, { ReactNode } from 'react';
import * as Styled from './HighlightedProjects.styles';
import { useHighlightedProjectsData } from './HighlightedProjects.config';
import Navbar from '../Navbar/Navbar';
import SectionHeader from '../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';
import Image from 'next/image';
import {
  SiAmazonaws,
  SiDocker,
  SiGithubactions,
  SiGo,
  SiGrafana,
  SiKubernetes,
  SiLinux,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiReact,
  SiRedis,
  SiTypescript,
} from 'react-icons/si';
import ScrollHint from '../ScrollHint/ScrollHint';
import ProjectDesktopSlide from '../ProjectDesktopSlide/ProjectDesktopSlide';
import ProjectDetailsSlide from '../ProjectDetailsSlide/ProjectDetailsSlide';
import WaveDivider from '../WaveDivider/WaveDivider';

const toolIcons: {
  name: string;
  icon?: ReactNode;
  src?: string;
}[] = [
  { name: 'Kubernetes', icon: <SiKubernetes /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'AWS', icon: <SiAmazonaws /> },
  { name: 'Linux', icon: <SiLinux /> },
  { name: 'GitHub Actions', icon: <SiGithubactions /> },
  { name: 'Go', icon: <SiGo /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'Redis', icon: <SiRedis /> },
  { name: 'Prometheus', icon: <SiPrometheus /> },
  { name: 'Grafana', icon: <SiGrafana /> },
  { name: 'Jaeger', src: '/assets/portfolio/logos/jaeger.svg' },
];

/**
 *Renders sections with some of my projects
 *@function HighlightedProjects
 *@returns {JSX.Element} - Rendered HighlightedProjects component
 */
const HighlightedProjects = (): JSX.Element => {
  const { highlightedProjects } = useHighlightedProjectsData();

  return (
    <Styled.Container>
      {/* NAVIGATION */}
      <Navbar isLogoExpanded={true} />
      {/* HERO */}
      <Styled.ProjectsHero>
        <Styled.HeroLeftColumn>
          <SectionHeader
            variant={'medium'}
            headerText={`Selected list of projects`}
            margin={'0'}
            color={'#58a6ff'}
          />

          <PortfolioParagraph
            margin={'1rem 0'}
            paragraphText={`Cloud-native systems, DevSecOps infrastructure, Kubernetes diagnostics, secure automation, and backend platforms pulled from my resume, GitHub, and recent internship work.`}
            withDarkColor={false}
            variant={'large'}
            withAnimatedPresence
          />
        </Styled.HeroLeftColumn>
        <Styled.HeroRightColumn>
          <Styled.ToolsGrid>
            {toolIcons.map((tool) => (
              <Styled.ToolIconWrapper key={tool.name}>
                {tool.icon ? (
                  <Styled.ToolIconNode aria-label={tool.name}>
                    {tool.icon}
                  </Styled.ToolIconNode>
                ) : (
                  <Image
                    src={tool.src || ''}
                    height={50}
                    width={50}
                    objectFit={'contain'}
                    alt={tool.name}
                  />
                )}
                <span>{tool.name}</span>
              </Styled.ToolIconWrapper>
            ))}
          </Styled.ToolsGrid>
        </Styled.HeroRightColumn>

        <ScrollHint />
      </Styled.ProjectsHero>

      {highlightedProjects.map((project) => (
        <React.Fragment key={project.projectTitle}>
          <ProjectDesktopSlide {...project} />

          {project.projectDetailsQuotes && (
            <>
              <ProjectDetailsSlide
                slideHeight={'100vh'}
                slideBgColor={project.slideBgColor}
                projectName={project.projectTitle}
                projectMobileImg={project.projectMobileImg}
                projectQuotes={project.projectDetailsQuotes}
                projectImages={project.projectDetailImages}
                projectToolIcons={project.technologyIcons}
                projectTools={project.projectDetailTools || project.projectTechnologies}
              />
              <WaveDivider
                waveImg={'/assets/portfolio/blob-1.svg'}
                dividerHeight={'150px'}
              />
            </>
          )}
        </React.Fragment>
      ))}
    </Styled.Container>
  );
};

export default HighlightedProjects;
