import { Story } from '@storybook/react';
import ProfessionalExperience, { Props } from './ProfessionalExperience';

export default {
  title: 'Portfolio/Resume/ProfessionalExperience',
  component: ProfessionalExperience,
};

const Template: Story<Props> = (args) => <ProfessionalExperience {...args} />;

export const SimpleVariant = Template.bind({});
SimpleVariant.args = {
  variant: 'simple',
  company: 'CHP Casablanca',
  companyImg: '/assets/portfolio/skills/developer.png',
  role: 'Digitalization and Workflows Intern',
  shortSummary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni architecto, ipsum itaque recusandae dolorum non!',
  timeFrame: '2019-Present',
};

export const WithResponsibilities = Template.bind({});
WithResponsibilities.args = {
  variant: 'withResponsibilities',
  company: 'ITO',
  companyImg: '/assets/portfolio/skills/developer.png',
  role: 'DevSecOps and Infrastructure Intern',
  shortSummary:
    'Pre-hire internship focused on production infrastructure, deployment automation, CI/CD hardening, and monitoring.',
  timeFrame: 'Jan 2026 - Jun 2026',
  responsibilities: [
    {
      text: 'Crafted a scalable component library that enforced accessibility and fluency across the application.',
      iconUrl: '/assets/portfolio/skills/check.svg',
    },
    {
      text: 'Built a multi-role user authentication system from the ground up with JavaScript.',
      iconUrl: '/assets/portfolio/skills/check.svg',
    },
    {
      text: 'Implemented a client-side localization system for the entire app.',
      iconUrl: '/assets/portfolio/skills/check.svg',
    },
    {
      text: 'Built a client-side multilingual routing system with solid navigation guards.',
      iconUrl: '/assets/portfolio/skills/check.svg',
    },
  ],
};
