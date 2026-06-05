import type { NextPage } from 'next';
import React from 'react';

import PortfolioLayout from '../../../components/Portfolio/PortfolioLayout/PortfolioLayout';
import Resume from '../../../components/Portfolio/Resume/Resume';
import { portfolioResumeTitle } from '../../../config/siteProfile';

const PortfolioLandingPage: NextPage = () => {
  return (
    <PortfolioLayout title={portfolioResumeTitle}>
      <Resume />
    </PortfolioLayout>
  );
};

export default PortfolioLandingPage;
