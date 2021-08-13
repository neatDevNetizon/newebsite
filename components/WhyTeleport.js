import React from 'react';
import styled from 'styled-components';
import Image1 from './../images/Image 1.png';
import Image from 'next/image';
const WhyTeleport = () => {
  return (
    <Wrapper className='section'>
      <Header>
        <h3>Why Teliportme ?</h3>
        <p className='title-desc'>
          We bring together everything required to build virtual tours , apps
          that capture 360 panoramas and allow embedding them globally. Stop
          using different tools when you can find everything you need here.
        </p>
      </Header>
      <Body>
        <ColumnLeft>
          <SingleItem>
            <h5>Fastest Download</h5>
            <p>
              We support a large variety of 360 cameras and also have our own
              dedicated apps to capture 360 photos and bring our own space to
              this fight
            </p>
          </SingleItem>
          <SingleItem>
            <h5>Security + Performance</h5>
            <p>
              We support a large variety of 360 cameras and also have our own
              dedicated apps to capture 360 photos and bring our own space to
              this fight
            </p>
          </SingleItem>
          <SingleItem>
            <h5>Battle Tested Reliability</h5>
            <p>
              We support a large variety of 360 cameras and also have our own
              dedicated apps to capture 360 photos and bring our own space to
              this fight
            </p>
          </SingleItem>
          <SingleItem>
            <h5>Battle Tested Reliability</h5>
            <p>
              We support a large variety of 360 cameras and also have our own
              dedicated apps to capture 360 photos and bring our own space to
              this fight
            </p>
          </SingleItem>
        </ColumnLeft>
        <ColumnRight>
          <Image src={Image1} alt='Image 1' />
        </ColumnRight>
      </Body>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 50px auto;
`;
const Header = styled.div`
  padding-left: 0.8rem;
  h3 {
    padding: 170px 0px 0px;
    margin: 8px 0px;
    font-size: 60px;
    line-height: 78px;
    font-weight: 800;
    font-family: Spartan, sans-serif;
    letter-spacing: 1px;
    color: rgb(17, 24, 39);
    @media(max-width: 600px){
      font-size:30px;
      padding: 0px 0px 0px;
    }
  }
  .title-desc {
    font-weight: 500;
    padding: 0px;
    margin: 0px 0px 80px;
    font-size: 24px;
    line-height: 40px;
    font-weight: 500;
    font-family: Spartan, sans-serif;
    letter-spacing: normal;
    color: rgb(107, 114, 128);
    max-width: 896px;
    @media(max-width: 600px){
      font-size:18px;
      padding-right: 10px;
    }
  }
`;
const Body = styled.div`
  display: grid;
  gap: 20px;
  @media (min-width: 1100px) {
    grid-template-columns: 1fr auto;
  }
`;
const ColumnLeft = styled.div``;
const SingleItem = styled.div`
  background-color: #f8f8fa;
  padding: 20.8px 12.8px;
  margin: 0px 0px 10px;
  font-size: 14px;
  line-height: 24.5px;
  font-weight: 400;
  letter-spacing: normal;
  color: rgb(38, 37, 37);
  background-color: rgb(248, 248, 250);
  cursor: pointer;
  transition: 0.3s ease;
  @media (max-width: 600px) {
    
  }
  h5 {
    margin: 0px;
    font-size: 20px;
    padding: 0px;
    line-height: 26px;
    font-weight: 700;
    letter-spacing: 1px;
    color: rgb(38, 37, 37);
    text-align: start;
    transition: 0.3s ease;
    @media (max-width: 600px) {
      margin-bottom: 8px;
    }
  }
  p {
    padding: 3px 0px 0px;
    font-size: 12px;
    margin: 0px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: normal;
    color: rgb(107, 114, 128);
    text-align: start;
    @media (max-width: 600px) {
      font-size: 16px;
      margin-bottom: 1rem;
    }
  }
  :hover {
    background-color: #fff7ea;
    h5 {
      color: #f8ba59;
    }
  }
`;
const ColumnRight = styled.div``;
export default WhyTeleport;
