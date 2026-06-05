import type { NextPage } from 'next';
import React from 'react';

import PortfolioLayout from '../../../components/Portfolio/PortfolioLayout/PortfolioLayout';
import HighlightedProjects from '../../../components/Portfolio/HighlightedProjects/HighlightedProjects';
import { portfolioPageTitle } from '../../../config/siteProfile';

const PortfolioLandingPage: NextPage = () => {
  return (
    <PortfolioLayout title={portfolioPageTitle}>
      <HighlightedProjects />
    </PortfolioLayout>
  );
};

export default PortfolioLandingPage;
