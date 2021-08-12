import React from 'react';
import styled from 'styled-components';

const HeroPricing = () => {
  return (
    <Wrapper className='section'>
      <HeroSection>
        <h2>Pricing custom–tailored for every stage of your business.</h2>
        <p className='trust hide-mobile'>
          Capture, build and analyze virtual tours using TeliportMe’s powerful
          software solutions and API’s designed to help you grow your revenue.
          Trusted by <span> 15 Million</span> creators and <span> 20,000+</span>
        </p>
      </HeroSection>
    </Wrapper>
  );
};
const Wrapper = styled.section``;

const HeroSection = styled.div`
  margin: 0 auto;
  margin-bottom: 100px;

  max-width: 974px;
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
`;
export default HeroPricing;
