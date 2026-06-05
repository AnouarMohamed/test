import React from 'react';
import * as Styled from './Acknowledgments.styles';
import Paragraph from '../Typography/Paragraph/Paragraph';
import { authors } from './Acknowledgments.config';
import { FiGithub } from 'react-icons/fi';
import WithSparkles from '../Portfolio/WithSparkles/WithSparkles';

/**
 *Renders Acknowledgments component with the list of people that heavily inspired this project
 *@function Acknowledgments
 *@returns {JSX.Element} - Rendered Acknowledgments component
 */
const Acknowledgments = (): JSX.Element => {
  return (
    <Styled.Container>
      <Paragraph margin={'1rem 0'}>
        My work sits on top of open-source infrastructure and the communities
        that maintain it. This space is for the teams, tools, and institutions
        that shaped my cloud-native and DevSecOps path.
      </Paragraph>

      <Paragraph margin={'1rem 0'}>
        I will keep expanding this list as the portfolio gets more of my
        project history.
      </Paragraph>

      <Styled.UL>
        {authors.map((author) => (
          <Styled.LI key={author.id}>
            <Styled.AuthorCard>
              <Styled.AuthorContacts>
                <Styled.A href={author.url} target="_blank" rel="noopener noreferrer">
                  <WithSparkles color={'yellow'}>{author.name}</WithSparkles>
                </Styled.A>

                {author.github && (
                  <Styled.A href={author.github} target="_blank" rel="noopener noreferrer">
                    <FiGithub className={'github__icon'} />
                  </Styled.A>
                )}
              </Styled.AuthorContacts>
              <Paragraph margin={'1rem 0'}>{author.acknowledgement}</Paragraph>
            </Styled.AuthorCard>
          </Styled.LI>
        ))}
      </Styled.UL>
    </Styled.Container>
  );
};

export default Acknowledgments;
