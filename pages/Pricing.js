import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import FrequentlyAsked from '../components/pricing-page/FrequentlyAsked';
import HeroPricing from '../components/pricing-page/HeroPricing';
import MoneyBack from '../components/pricing-page/MoneyBack';
import PricingPlan from '../components/pricing-page/PricingPlan';
import PricingPlanCarousel from '../components/pricing-page/PricingPlanCarousel';
import PricingWrapper from '../components/pricing-page/PricingWrapper';
import PricingWrapperCarousel from '../components/pricing-page/PricingWrapperCarousel';

const Pricing = () => {
  return (
    <>
      <Navbar />
      <HeroPricing />
      <PricingPlan />
      {/* <PricingPlanCarousel /> */}
      <MoneyBack />
      <PricingWrapper />
      {/* <PricingWrapperCarousel /> */}
      <FrequentlyAsked />
      <Footer />
    </>
  );
};

export default Pricing;
