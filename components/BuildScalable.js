import React from 'react';
import styled from 'styled-components';
import Image1 from './../images/Image 1.png';
import Image from 'next/image';
import Icon1 from "./../images/build-icon.svg";
const BuildScalable = () => {
  return (
    <Wrapper className='section'>
      <Header>
        <div className="platform-icon">
          {"<"}
        </div>
        <h3 className="plat-title">One Unified Platform </h3>
        <p className='title-desc'>
          We bring together everything required to build virtual tours , apps
          that capture 360 panoramas and allow embedding them globally. Stop
          using different tools when you can find everything you need here.
        </p>
      </Header>
      <Body>
        <ColumnLeft>
          <SingleItem>
            <h5>All 360 Cameras Supported</h5>
            <p>
              We support a large variety of 360 cameras and also have our own
              dedicated apps to capture 360 photos and bring our own space to
              this fight
            </p>
          </SingleItem>
          <SingleItem>
            <h5>Powerful Editor</h5>
            <p>
              We support a large variety of 360 cameras and also have our own
              dedicated apps to capture 360 photos and bring our own space to
              this fight
            </p>
          </SingleItem>
          <SingleItem>
            <h5>Full Customization</h5>
            <p>
              We support a large variety of 360 cameras and also have our own
              dedicated apps to capture 360 photos and bring our own space to
              this fight
            </p>
          </SingleItem>
          <SingleItem>
            <h5>Share, Embed And Add To Listings</h5>
            <p>
              We support a large variety of 360 cameras and also have our own
              dedicated apps to capture 360 photos and bring our own space to
              this fight
            </p>
          </SingleItem>
        </ColumnLeft>
        <ColumnRight>
          <div>
            <Image src={Image1} alt='Image 1' />
          </div>
        </ColumnRight>
      </Body>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 1rem auto;
`;
const Header = styled.div`
  padding-left: 0.8rem;
  h3 {
    z-index: 11;
    margin-bottom: 8px;
    position: relative;
    display: block;
    // :before {
    //   width: 420px;
    //   content: '';
    //   height: 25px;
    //   position: absolute;
    //   bottom: 5px;
    //   left: -5px;
    //   background-color: #fcedd6;
    //   z-index: -1;
    //   clip-path: polygon(2% 0, 100% 0, 98% 100%, 0 100%);
    //   @media (max-width: 799px) {
    //     width: 80%;
    //     height: 70%;
    //   }
    // }
  }
  .title-desc {
    font-weight: 300;
    letter-spacing: normal;
    font-size: 24px;
    line-height: 40px;
    margin: 0px 0px 20px;
    padding: 24px 0px 35px;
    color: #6B7280;
    text-align: start;
    max-width: 896px;
    font-weight: 500;
    @media (max-width: 600px) {
      font-size: 18px;
      margin: -1px 0px 20px -9px;
      padding: 24px 0px 66px;
      line-height: 28px;
    }
  }
  .platform-icon {
    padding: 200px 0px 0px;
    font-size: 30px;
    font-weight: 900;
    font-family: Spartan, sans-serif;
    width: 50%;
  }
  .plat-title {
    font-weight: 800;
    line-height: 78px;
    font-size: 60px;
    padding: 41px 0px 0px;
    margin: 7px 0px 8px;
    color: rgba(34, 2, 64, 0.82);
    letter-spacing: -0.18rem;
    @media (max-width: 600px) {
      padding: 137px 0px 0px;
      margin: 7px 39px 8px -12px;
      font-size: 30px;
      line-height: 39px;
      font-weight: 800;
      letter-spacing: 1px;
      font-family: Spartan, sans-serif;
      color: rgb(17, 24, 39);
      text-align: start;
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
    line-height: 45px;
    font-weight: 700;
    letter-spacing: 1px;
    color: rgba(17, 24, 39,0.84);
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
    color: rgba(107, 114, 128, 0.8);
    text-align: start;
    @media (max-width: 600px) {
      font-size: 16px;
      margin-bottom: 1rem;
    }
  }
  :hover {
    background-color: rgba(228, 190, 225, 0.12);
    h5 {
      color: #692F92;
    }
  }
`;
const ColumnRight = styled.div`
  div {
    height: calc(100% - 5px);
  }
  .platform-img {
    height: 100%;
    object-fit:
  }
`;
export default BuildScalable;
