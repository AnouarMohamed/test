import React from 'react';
import * as Styled from './SecondSlide.styles';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../../../Typography/PortfolioParagraph/PortfolioParagraph';
import Slide from '../../../Slide/Slide';
import WithSparkles from '../../../WithSparkles/WithSparkles';

/**
 *Renders second slide in About Portfolio presentation
 *@function SecondSlide
 *@returns {JSX.Element} - Rendered SecondSlide component
 */
const SecondSlide = (): JSX.Element => {
  return (
    <Slide bgColor={'#4831d4'} height={'100vh'} anchorID={'second-slide'}>
      <Styled.SecondSlide className="page second-page">
        <div className="left-column">
          <SectionHeader
            variant={'medium'}
            headerText={'Infrastructure'}
            margin={'0'}
            color={'#00add8'}
          />

          <PortfolioParagraph
            margin={'0'}
            withDarkColor={false}
            variant={'large'}
            withAnimatedPresence={true}
          >
            I am a final-year engineering student focused on{' '}
            <WithSparkles color={'yellow'}>Kubernetes, DevSecOps</WithSparkles>
            , cloud infrastructure, and backend systems. I use GitHub to
            document practical systems work: diagnostics, automation,
            monitoring, debugging, and open-source contributions.
          </PortfolioParagraph>
        </div>
        <div className="right-column">
          <PortfolioParagraph
            margin={'0'}
            paragraphText={
              'I work across Go, TypeScript, Python, Java, React, FastAPI, Spring Boot, PostgreSQL, Redis, Docker, Helm, Kustomize, GitHub Actions, CodeQL, Trivy, Prometheus, Grafana, and Zabbix.'
            }
            withDarkColor={false}
            variant={'large'}
            withAnimatedPresence={true}
          />
          <SectionHeader
            variant={'medium'}
            headerText={'Operations'}
            margin={'0'}
            color={'#00add8'}
          />
        </div>
      </Styled.SecondSlide>
    </Slide>
  );
};

export default SecondSlide;
