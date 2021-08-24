import React from 'react';
import styled from 'styled-components';

const HeroPricing = () => {
  return (
    <Wrapper className='section'>
      <HeroSection>
        <p className="hero-title">Tailored for every stage of business.</p>
        {/* <p className='trust hide-mobile'>
          Capture, build and analyze virtual tours using TeliportMe’s powerful
          software solutions and API’s designed to help you grow your revenue.
          Trusted by <span> 15 Million</span> creators and <span> 20,000+</span>
        </p> */}
      </HeroSection>
    </Wrapper>
  );
};
const Wrapper = styled.section``;

const HeroSection = styled.div`
  margin: 0 auto;
  margin-bottom: 70px;

  max-width: 1170px;
  text-align: center;
  @media (max-width: 600px) {
    text-align: left;
    margin-bottom: 50px;
    .hide-mobile {
      display: none;
    }
  }
  .trust {
    margin: 0 auto;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 20px;
    max-width: 714px;
    span {
      color: #33b864;

      font-weight: 700;
      margin: 0 2px;
    }
  }
  .hero-title {
    font-size: 48px;
    text-transform: normal;
    font-weight: bold;
    letter-spacing: -1px;
    font-family: Spartan, sans-serif;
  }
`;
export default HeroPricing;
