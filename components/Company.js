import React from 'react';
import styled from 'styled-components';
import sony from './../images/sony.PNG';
import samsung from './../images/samsung.png';
import archdaily from './../images/archdaily.png';
import news from './../images/news.png';
import zillow from './../images/zillow.png';
import Image from 'next/image';
const Company = () => {
  return (
    <Wrapper className='section'>
      <h3>The Affordable Matterport Alternative The Matters</h3>
      <p>No lock-ins Total Freedom. 100,000 Clients can&apos;t be wrong</p>
      <div className='company'>
        <div className='company-img'>
          <Image src={samsung} alt='' />
        </div>
        <div className='company-img'>
          <Image src={sony} alt='' />
        </div>
        <div className='company-img'>
          <Image src={zillow} alt='' />
        </div>
        <div className='company-img'>
          <Image src={news} alt='' />
        </div>
        <div className='company-img'>
          <Image src={samsung} alt='' />
        </div>
        <div className='company-img'>
          <Image src={archdaily} alt='' />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  text-align: center;
  @media (max-width: 600px) {
    text-align: left;
  }
  margin: 0rem auto;
  max-width: 1056px;
  margin-top: -20px;

  z-index: 99999;

  h3 {
    margin-bottom: 20px;
    font-size: 34px;
    font-weight: 700;
    @media (max-width: 600px) {
      font-size: 24px;
    }
  }
  p {
    margin-top: 0;
  }
  .company {
    padding-top: 2rem;
    display: flex;
    flex-wrap: Wrap;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4rem;
    margin-top: 2rem;
    @media (max-width: 900px) {
      margin-bottom: 2rem;
    }
    @media (max-width: 600px) {
      justify-content: space-around;
      gap: 0rem 2rem;
      .company-img {
        height: 50px;
        width: 80px;
      }
    }
    @media (max-width: 380px) {
      justify-content: space-around;
      gap: 0rem 1rem;
      .company-img {
        height: 50px;
        width: 80px;
      }
    }
  }
`;
export default Company;
