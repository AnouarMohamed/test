import type { NextPage } from 'next';
import React from 'react';
import PortfolioLayout from '../../../components/Portfolio/PortfolioLayout/PortfolioLayout';
import About from '../../../components/Portfolio/About/About';
import { portfolioPageTitle } from '../../../config/siteProfile';

const PortfolioAboutPage: NextPage = () => {
  return (
    <PortfolioLayout title={portfolioPageTitle}>
      <About />
    </PortfolioLayout>
  );
};

export default PortfolioAboutPage;
