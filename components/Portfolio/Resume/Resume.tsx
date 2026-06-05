import React from 'react';
import * as Styled from './Resume.styles';
import TextList from '../TextList/TextList';

import {
  keyTechSkills,
  openSourceHighlights,
  operationalStrengths,
  otherSkills,
  professionalExperience,
  resumeProjectHighlights,
} from './Resume.config';
import {
  FiDownload,
  FiGithub,
  FiGlobe,
  FiMail,
  FiPhoneOutgoing,
} from 'react-icons/fi';
import { SiLinkedin } from 'react-icons/si';
import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';
import ProfessionalExperience from '../ProfessionalExperience/ProfessionalExperience';
import Link from 'next/link';
import { siteProfile } from '../../../config/siteProfile';

/**
 *Renders resume component
 *@function Resume
 *@returns {JSX.Element} - Rendered CardContent component
 */
const Resume = (): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.ResumeWrapper>
        <Styled.LeftColumn>
          <Styled.ContactInfo>
            <Styled.ContactLink
              href={siteProfile.siteUrl}
              target="_blank"
              rel="noopener"
            >
              <FiGlobe />
              {siteProfile.siteUrl.replace('https://', '')}
            </Styled.ContactLink>

            <Styled.ContactLink href={`mailto:${siteProfile.email}`}>
              <FiMail />
              {siteProfile.email}
            </Styled.ContactLink>

            <Styled.ContactLink href={`tel:${siteProfile.phone}`}>
              <FiPhoneOutgoing />
              {siteProfile.phone}
            </Styled.ContactLink>

            <p>{siteProfile.location}</p>
          </Styled.ContactInfo>

          <TextList
            variant={'withHeader'}
            textBulletPoints={keyTechSkills}
            headerText={'key technical skills'}
          />

          <TextList
            variant={'withHeader'}
            textBulletPoints={otherSkills}
            headerText={'Other skills'}
          />
        </Styled.LeftColumn>

        <Styled.RightColumn>
          {/*HEADER WITH NAME*/}
          <Styled.SummaryHeader>
            <Styled.Name>
              {siteProfile.firstName} <span>{siteProfile.lastName}</span>
            </Styled.Name>
            <Styled.Title>{siteProfile.headline}</Styled.Title>

            {/*SOCIAL MEDIA LINKS*/}
            <Styled.SocialLinksWrapper>
              {siteProfile.linkedinUrl && (
                <Styled.SocialMediaLink
                  href={siteProfile.linkedinUrl}
                  target={'_blank'}
                  rel="noopener"
                >
                  <SiLinkedin className={'social-media-icon'} />
                  Linkedin
                </Styled.SocialMediaLink>
              )}
              <Styled.SocialMediaLink
                href={siteProfile.githubUrl}
                target={'_blank'}
                rel="noopener"
              >
                <FiGithub className={'social-media-icon'} />
                GitHub
              </Styled.SocialMediaLink>
              <Styled.SocialMediaLink href={`mailto:${siteProfile.email}`}>
                <FiMail className={'social-media-icon'} />
                Email
              </Styled.SocialMediaLink>
              <Styled.SocialMediaLink href={`tel:${siteProfile.phone}`}>
                <FiPhoneOutgoing className={'social-media-icon'} />
                Phone
              </Styled.SocialMediaLink>

              {siteProfile.resumePdf && (
                <Styled.SocialMediaLink
                  href={siteProfile.resumePdf}
                  download={siteProfile.resumePdfName}
                >
                  <FiDownload className={'social-media-icon'} />
                  Download CV
                </Styled.SocialMediaLink>
              )}
            </Styled.SocialLinksWrapper>

            <Styled.HR />
            {/*SUMMARY*/}
            <Styled.Summary>
              <Styled.ResumeHeader>Summary</Styled.ResumeHeader>
              <PortfolioParagraph
                margin={'0'}
                paragraphText={`Final-year engineering student focused on cloud-native infrastructure, DevSecOps, Kubernetes diagnostics, CI/CD hardening, observability, and backend systems. I build practical operations tooling in Go, TypeScript, Python, and Java, with production internship experience across Docker Swarm, Portainer, Traefik, Nginx, uptime monitoring, CodeQL, dependency scanning, and deployment documentation. I am targeting Cloud/DevSecOps, infrastructure, Kubernetes, and backend roles where operational rigor matters.`}
                withDarkColor={true}
                variant={'medium'}
                withAnimatedPresence={false}
              />
            </Styled.Summary>
          </Styled.SummaryHeader>

          {/*EXPERIENCE*/}

          <Styled.ResumeHeader>Experience</Styled.ResumeHeader>
          <PortfolioParagraph
            margin={'0'}
            paragraphText={
              'I have worked on real infrastructure deployments, monitoring dashboards, secure CI/CD workflows, hospital workflow digitization, and open-source cloud-native systems.'
            }
            withDarkColor={true}
            variant={'medium'}
            withAnimatedPresence={false}
          />

          {professionalExperience.map((experience, id) => (
            <ProfessionalExperience key={id} {...experience} />
          ))}
          {/*PROJECTS*/}
          <Styled.ResumeHeader>Key Project Highlights</Styled.ResumeHeader>

          <Styled.Projects>
            {resumeProjectHighlights.map((project) => (
              <p key={project.title}>
                <strong>{project.title}:</strong> {project.text}{' '}
                {project.url && (
                  <a href={project.url} target="_blank" rel="noreferrer">
                    View
                  </a>
                )}
              </p>
            ))}
            <p>
              More selected work can be found on{' '}
              <Link href={'/portfolio/projects'}>the projects page</Link>.
            </p>
          </Styled.Projects>

          <Styled.ResumeHeader>Open Source</Styled.ResumeHeader>
          <Styled.Projects>
            {openSourceHighlights.map((project) => (
              <p key={project.title}>
                <strong>{project.title}:</strong> {project.text}{' '}
                {project.url && (
                  <a href={project.url} target="_blank" rel="noreferrer">
                    Source
                  </a>
                )}
              </p>
            ))}
          </Styled.Projects>

          <Styled.ResumeHeader>Operational Strengths</Styled.ResumeHeader>
          <Styled.Projects>
            {operationalStrengths.map((strength) => (
              <p key={strength.title}>
                <strong>{strength.title}:</strong> {strength.text}
              </p>
            ))}
          </Styled.Projects>

          <Styled.ResumeHeader>Achievements</Styled.ResumeHeader>
          <Styled.Projects>
            <p>
              <strong>GitHub certifications:</strong> Completed GitHub
              Foundations, Actions, Advanced Security, and Administration.
            </p>
            <p>
              <strong>Open source:</strong> Contributed to Nodewright/Skyhook,
              Bigwheels, GKE Policy Automation, Kubernetes, Flipt, Oracle FDR,
              cronet-transport-for-okhttp, and aws-xray-sdk-node.
            </p>
            <p>
              <strong>Cloud and data certifications:</strong> AWS Cloud
              Practitioner, Huawei Cloud, and Cisco Data Analytics Essentials.
            </p>
            <p>
              <strong>Leadership:</strong> Founding president of the
              Mundiapolis Chess Club and active Library Club contributor.
            </p>
          </Styled.Projects>

          {/* EDUCATION */}
          <Styled.ResumeHeader>Education</Styled.ResumeHeader>

          <Styled.EducationDetails>
            <h4>
              Engineering Degree in Computer Science
              <span>Cloud-native, DevSecOps, infrastructure</span>
            </h4>
            <Styled.University>
              Mundiapolis University, Casablanca, 2024 to present
            </Styled.University>
          </Styled.EducationDetails>

          <Styled.EducationDetails>
            <h4>
              Integrated Preparatory Classes
              <span>Computer science foundations</span>
            </h4>
            <Styled.University>
              Mundiapolis University, 2022 to 2024
            </Styled.University>
          </Styled.EducationDetails>

          <Styled.EducationDetails>
            <h4>
              Baccalaureate in Physical Sciences
              <span>Casablanca</span>
            </h4>
            <Styled.University>2022</Styled.University>
          </Styled.EducationDetails>
        </Styled.RightColumn>
      </Styled.ResumeWrapper>
    </Styled.Container>
  );
};

export default Resume;
