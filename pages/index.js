import Head from 'next/head';

import CarouselComponent from '../components/CarouselComponent';
import Company from '../components/Company';
import Hero from '../components/Hero';
import Platform from '../components/Platform';

import CreatorFeatures from '../components/CreatorFeatures';
import CustomizeTour from '../components/CustomizeTour';
import LearnMoreCarousel from '../components/LearnMoreCarousel';
import JoinTours from '../components/JoinTours';

import Footer from '../components/Footer';
import WebinarTraining from '../components/WebinarTrainig';

import Script from 'next/script';
import VirtualSettings2 from '../components/VirtualSettings2';
import WhyTeleport from '../components/WhyTeleport';
import BuildScalable from '../components/BuildScalable';
import BuildBusiness from '../components/BuildBusiness';

export default function Home() {
  return (
    <div className='App'>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <Script
          src='https://kit.fontawesome.com/cb85dba142.js'
          crossOrigin='anonymous'
        ></Script>
      </Head>
      <Hero />
      <Company />
      <CarouselComponent />
      <Platform />
      <BuildBusiness />
      <WhyTeleport />
      <VirtualSettings2 />
      {/* <CreatorFeatures /> */}
      {/* <CustomizeTour /> */}
      <LearnMoreCarousel />
      <BuildScalable />
      <JoinTours />
      <WebinarTraining />
      <Footer />
    </div>
  );
}
