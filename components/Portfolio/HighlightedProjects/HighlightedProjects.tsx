import React from 'react';
import * as Styled from './HighlightedProjects.styles';
import { useHighlightedProjectsData } from './HighlightedProjects.config';
import Navbar from '../Navbar/Navbar';
import SectionHeader from '../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';
import Image from 'next/image';
import ScrollHint from '../ScrollHint/ScrollHint';
import ProjectDesktopSlide from '../ProjectDesktopSlide/ProjectDesktopSlide';
import ProjectDetailsSlide from '../ProjectDetailsSlide/ProjectDetailsSlide';
import WaveDivider from '../WaveDivider/WaveDivider';
import { FiGitBranch, FiGithub, FiStar } from 'react-icons/fi';

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
          <Styled.GitHubVisualShell>
            <Styled.RepoBadge className={'main-repo'}>
              <FiGithub className={'repo-icon'} />
              <span>AnouarMohamed / KubeLens-AI</span>
            </Styled.RepoBadge>
            <Styled.ImageContainer
              position={{ top: '6%', right: '2%' }}
              className={'laptop-wrapper'}
            >
              <Styled.FloatingImgContainer variant={'laptop'}>
                <Image
                  src={'/assets/portfolio/landing-laptop.png'}
                  quality={95}
                  height={800}
                  width={800}
                  objectFit={'contain'}
                  alt={'Laptop with code editor'}
                  priority
                  className={'laptop'}
                />
              </Styled.FloatingImgContainer>
            </Styled.ImageContainer>
            <Styled.ImageContainer
              position={{ top: '34%', right: '1rem' }}
              className={'mobile-wrapper'}
            >
              <Styled.FloatingImgContainer variant={'phone'}>
                <Image
                  src={'/assets/portfolio/landing-mobile.png'}
                  quality={95}
                  height={450}
                  width={350}
                  alt={'Mobile project preview'}
                  layout={'fixed'}
                  objectFit={'contain'}
                  priority
                  className={'mobile'}
                />
              </Styled.FloatingImgContainer>
            </Styled.ImageContainer>
            <Styled.ImageContainer
              position={{ bottom: '5rem', left: '0' }}
              className={'watch-wrapper'}
            >
              <Styled.FloatingImgContainer variant={'watch'}>
                <Image
                  src={'/assets/portfolio/landing-watch.png'}
                  layout={'fixed'}
                  quality={95}
                  height={190}
                  width={190}
                  objectFit={'contain'}
                  alt={'Watch deployment preview'}
                  priority
                  className={'watch'}
                />
              </Styled.FloatingImgContainer>
            </Styled.ImageContainer>
            <Styled.RepoMetaRail aria-label={'GitHub project highlights'}>
              <li>
                <FiStar className={'repo-icon'} />
                KubeLens AI
              </li>
              <li>
                <FiGitBranch className={'repo-icon'} />
                StateSight
              </li>
              <li>
                <FiGithub className={'repo-icon'} />
                Nodewright
              </li>
            </Styled.RepoMetaRail>
          </Styled.GitHubVisualShell>
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
