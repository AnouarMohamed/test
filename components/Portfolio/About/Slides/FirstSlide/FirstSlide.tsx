import React from 'react';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../../../Typography/PortfolioParagraph/PortfolioParagraph';
import ScrollHint from '../../../ScrollHint/ScrollHint';
import * as Styled from './FirstSlide.styles';
import Slide from '../../../Slide/Slide';
import WithSparkles from '../../../WithSparkles/WithSparkles';

/**
 *Renders first slide in About Portfolio presentation
 *@function FirstSlide
 *@returns {JSX.Element} - Rendered CardContent component
 */
const FirstSlide = (): JSX.Element => {
  return (
    <Slide bgColor={'#010606'} height={`100vh`} anchorID={'first-slide'}>
      <Styled.FirstSlide id={'first-slide'} className="page first-page">
        <SectionHeader
          variant={'medium'}
          headerText={'Cloud-native DevSecOps Engineer'}
          margin={'0'}
          color={'#00add8'}
        />

        <PortfolioParagraph
          margin={'1rem 0'}
          withDarkColor={false}
          variant={'large'}
          withAnimatedPresence={true}
        >
          I build infrastructure tooling, Kubernetes diagnostics, secure CI/CD
          workflows, and backend systems for real operational environments.{' '}
          <WithSparkles color={'yellow'}>That is my focus.</WithSparkles>
        </PortfolioParagraph>

        <ScrollHint />
      </Styled.FirstSlide>
    </Slide>
  );
};

export default FirstSlide;
