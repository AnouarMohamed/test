import React from 'react';
import * as Styled from './SixthSlide.styles';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../../../Typography/PortfolioParagraph/PortfolioParagraph';
import Slide from '../../../Slide/Slide';
import ActionButton from '../../../ActionButton/ActionButton';
import { FiChevronsRight, FiGithub } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { siteProfile } from '../../../../../config/siteProfile';

/**
 *Renders fifth slide in About Portfolio presentation
 *@function SixthSlide
 *@returns {JSX.Element} - Rendered SixthSlide component
 */
const SixthSlide = (): JSX.Element => {
  const router = useRouter();
  const redirectToProjects = () => {
    router.push('/portfolio/projects');
  };
  const openGithub = () => {
    window.open(siteProfile.githubUrl, '_blank');
  };
  return (
    <Slide bgColor={'#010606'} height={'100vh'} anchorID={'sixth-slide'}>
      <Styled.SixthSlide>
        <div className="left-column">
          <div className="content-wrapper">
            <SectionHeader
              variant={'small'}
              headerText={'I build systems'}
              margin={'0'}
              color={'#00add8'}
            />
            <PortfolioParagraph
              margin={'2rem 0 4rem 0'}
              paragraphText={`Kubernetes diagnostics, GitOps forensic tooling, monitoring stacks, secure command channels, and deployment automation.`}
              withDarkColor={false}
              variant={'large'}
              withAnimatedPresence={true}
            />
            <ActionButton
              buttonText={'See my projects'}
              icon={<FiChevronsRight className="action-icon" />}
              onClick={redirectToProjects}
            />
          </div>
        </div>
        <div className="right-column">
          <div className="content-wrapper">
            <SectionHeader
              variant={'small'}
              headerText={'I document operations'}
              margin={'0'}
              color={'#00add8'}
            />
            <PortfolioParagraph
              margin={'2rem 0 4rem 0'}
              paragraphText={
                'Runbooks, deployment notes, CI/CD security, observability workflows, and open-source contributions.'
              }
              withDarkColor={false}
              variant={'large'}
              withAnimatedPresence={true}
            />
            <ActionButton
              buttonText={'Open GitHub'}
              icon={<FiGithub className="action-icon" />}
              onClick={openGithub}
            />
          </div>
        </div>
      </Styled.SixthSlide>
    </Slide>
  );
};

export default SixthSlide;
