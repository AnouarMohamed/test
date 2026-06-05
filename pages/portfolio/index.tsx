import type { NextPage } from 'next';
import React from 'react';

import PortfolioLayout from '../../components/Portfolio/PortfolioLayout/PortfolioLayout';
import PortfolioLanding from '../../components/Portfolio/PortfolioLanding/PortfolioLanding';
import { portfolioPageTitle } from '../../config/siteProfile';

const PortfolioLandingPage: NextPage = () => {
  return (
    <PortfolioLayout title={portfolioPageTitle}>
      <PortfolioLanding />
    </PortfolioLayout>
  );
};

export default PortfolioLandingPage;
