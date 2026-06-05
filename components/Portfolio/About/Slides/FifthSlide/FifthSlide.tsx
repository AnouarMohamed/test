import React from 'react';
import * as Styled from './FifthSlide.styles';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';
import PortfolioParagraph from '../../../Typography/PortfolioParagraph/PortfolioParagraph';
import Slide from '../../../Slide/Slide';

/**
 *Renders fifth slide in About Portfolio presentation
 *@function FifthSlide
 *@returns {JSX.Element} - Rendered FifthSlide component
 */
const FifthSlide = (): JSX.Element => {
  return (
    <Slide bgColor={'#010606'} height={'100vh'} anchorID={'fifth-slide'}>
      <Styled.FifthSlide>
        <SectionHeader
          variant={'small'}
          headerText={'Highlighted milestones'}
          margin={'0'}
          color={'#00add8'}
        />
        <Styled.Milestone variant={'first'}>
          <Styled.MilestoneHeader>
            <h3>DevSecOps and Infrastructure Intern</h3>
            <time>2026</time>
          </Styled.MilestoneHeader>
          <h4>ITO</h4>
          <PortfolioParagraph
            margin={'1rem 0'}
            paragraphText={
              'Administered VPS infrastructure, migrated roughly 6 services to Docker Swarm, Portainer, Traefik and Nginx, and hardened CI/CD with CodeQL, dependency scanning, tests, API monitoring, uptime supervision, and deployment documentation.'
            }
            withDarkColor={false}
            variant={'medium'}
            withAnimatedPresence={true}
          />
        </Styled.Milestone>

        <Styled.Milestone variant={'second'}>
          <Styled.MilestoneHeader>
            <h3>Deployment, Virtualization, and Monitoring Intern</h3>
            <time>2025</time>
          </Styled.MilestoneHeader>
          <h4>Finatech Group</h4>
          <PortfolioParagraph
            margin={'1rem 0'}
            paragraphText={`Deployed 8 virtualized environments and 4 monitoring dashboards with alerting, contributed to segmentation across 3 logical network zones, hardened baseline configurations, and documented deployment and monitoring procedures.`}
            withDarkColor={false}
            variant={'medium'}
            withAnimatedPresence={true}
          />
        </Styled.Milestone>

        <Styled.Milestone variant={'third'}>
          <Styled.MilestoneHeader>
            <h3>KubeLens AI, StateSight, and Nodewright</h3>
            <time>2026</time>
          </Styled.MilestoneHeader>
          <h4>Cloud-native and open-source project work</h4>
          <PortfolioParagraph
            margin={'1rem 0'}
            paragraphText={
              'Built Kubernetes diagnostics, incident workflows, AI-assisted triage, and GitOps drift analysis systems using Go, React, TypeScript, FastAPI, PostgreSQL, Redis, Docker Compose, Helm, Kustomize, Prometheus, Grafana, and Jaeger. Also contributed heavily to Nodewright, formerly Skyhook, around Kubernetes operator workflows and stability.'
            }
            withDarkColor={false}
            variant={'medium'}
            withAnimatedPresence={true}
          />
        </Styled.Milestone>

        <Styled.Milestone variant={'fourth'}>
          <Styled.MilestoneHeader>
            <h3>Engineering Degree</h3>
            <time>2024-Present</time>
          </Styled.MilestoneHeader>
          <h4>Mundiapolis University, Casablanca</h4>
          <PortfolioParagraph
            margin={'1rem 0'}
            paragraphText={
              'Final-year computer engineering student. Current focus: Kubernetes diagnostics, GitOps workflows, CI/CD hardening, observability, monitoring, incident analysis, Go, TypeScript, Python, and cloud-native tooling.'
            }
            withDarkColor={false}
            variant={'medium'}
            withAnimatedPresence={true}
          />
        </Styled.Milestone>
      </Styled.FifthSlide>
    </Slide>
  );
};

export default FifthSlide;
