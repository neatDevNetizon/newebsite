import React from 'react';
import styled from 'styled-components';
import image from '../../images/guarantee.png';
import Image from 'next/image';
const MoneyBack = () => {
  return (
    <Wrapper className='section'>
      <div className='image'>
        <Image src={image} alt='' />
      </div>
      <RightColumn>
        <h4>14-Day Money-back Guarantee</h4>
        <p>
          All TeliportMe plans come with a 14-day money-back guarantee. If for
          any reason you are not satisfied, simply email us at
          support@teliportme.com within your refund period. No questions asked!
        </p>
      </RightColumn>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  @media (max-width: 700px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 50px;
  }

  .image {
    height: 137px;
    min-width: 137px;
    img {
      height: 100%;
      width: 100%;
    }
    @media (max-width: 700px) {
      display: none;
    }
  }
`;
const RightColumn = styled.div`
  width: 530px;
  letter-spacing: 0px;
  font-family: Spartan, sans-serif;
  h4 {
    margin: 0;
    font-size: 24px;
    @media (max-width: 600px) {
      margin-bottom: 5px;
      font-size: 18px;
    }
  }
  p {
    font-size: 13px;
    margin: 0;
    @media(max-width: 600px) {
      font-size: 12px;
    }
  }
`;

export default MoneyBack;
