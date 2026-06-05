import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { siteProfile } from '../../../config/siteProfile';

const designArtifacts = [
  {
    title: 'KubeLens AI',
    description: 'Kubernetes diagnostics, incidents, remediation, and telemetry.',
    image: '/assets/portfolio/projects/kublens/overview.png',
    href: 'https://github.com/AnouarMohamed/KubLens-AI',
  },
  {
    title: 'StateSight',
    description: 'GitOps forensic views for desired-vs-live Kubernetes state.',
    image: '/assets/portfolio/projects/statesight/incident.png',
    href: 'https://github.com/AnouarMohamed/StateSight',
  },
  {
    title: 'Nodewright',
    description: 'Open-source Kubernetes operator contribution surface.',
    image: '/assets/portfolio/projects/nodewright/overview.png',
    href: 'https://github.com/NVIDIA/nodewright',
  },
];

const Figma = (): JSX.Element => {
  return (
    <Container>
      <Header>
        <div>
          <Eyebrow>Anouar design board</Eyebrow>
          <h1>Project interface assets</h1>
          <p>
            Interface references for the systems I am building and maintaining.
          </p>
        </div>
        <ProfileLink href={siteProfile.githubUrl} target="_blank" rel="noreferrer">
          <FiGithub />
          GitHub
        </ProfileLink>
      </Header>

      <Grid>
        {designArtifacts.map((artifact) => (
          <ArtifactCard key={artifact.title}>
            <Preview>
              <Image
                src={artifact.image}
                alt={`${artifact.title} interface preview`}
                height={360}
                width={640}
                objectFit="cover"
              />
            </Preview>
            <CardBody>
              <div>
                <h2>{artifact.title}</h2>
                <p>{artifact.description}</p>
              </div>
              <a href={artifact.href} target="_blank" rel="noreferrer">
                <FiExternalLink />
              </a>
            </CardBody>
          </ArtifactCard>
        ))}
      </Grid>
    </Container>
  );
};

export default Figma;

const Container = styled.section`
  min-height: 100%;
  padding: 2rem;
  background: #0d1117;
  color: #c9d1d9;
  overflow-y: auto;
`;

const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;

  h1 {
    margin: 0.35rem 0;
    color: #f0f6fc;
    font-size: 2rem;
    line-height: 1.1;
  }

  p {
    max-width: 58ch;
    color: #8b949e;
    line-height: 1.55;
  }
`;

const Eyebrow = styled.span`
  color: #58a6ff;
  font-size: 0.85rem;
  font-weight: 700;
`;

const ProfileLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  padding: 0.55rem 0.8rem;
  border: 1px solid #30363d;
  border-radius: 6px;
  color: #c9d1d9;
  background: #161b22;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
`;

const ArtifactCard = styled.article`
  overflow: hidden;
  border: 1px solid #30363d;
  border-radius: 6px;
  background: #161b22;
`;

const Preview = styled.div`
  aspect-ratio: 16 / 9;
  background: #010409;

  img {
    width: 100%;
    height: 100%;
  }
`;

const CardBody = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;

  h2 {
    margin: 0 0 0.4rem;
    color: #58a6ff;
    font-size: 1rem;
  }

  p {
    color: #8b949e;
    font-size: 0.9rem;
    line-height: 1.45;
  }

  a {
    color: #8b949e;
  }
`;
