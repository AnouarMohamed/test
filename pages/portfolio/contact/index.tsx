import type { NextPage } from 'next';
import React from 'react';

import PortfolioLayout from '../../../components/Portfolio/PortfolioLayout/PortfolioLayout';
import Contact from '../../../components/Portfolio/Contact/Contact';
import { portfolioPageTitle } from '../../../config/siteProfile';

const PortfolioLandingPage: NextPage = () => {
  return (
    <PortfolioLayout title={portfolioPageTitle}>
      <Contact />
    </PortfolioLayout>
  );
};

export default PortfolioLandingPage;
