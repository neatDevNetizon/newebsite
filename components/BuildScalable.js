import React from 'react';
import styled from 'styled-components';
import Image1 from './../images/Image 1.png';
import Image from 'next/image';
const BuildScalable = () => {
  return (
    <Wrapper className='section'>
      <Header>
        <h3>Build Scalable Applications</h3>
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
            <h5>API First Implementation</h5>
            <p>
              We support a large variety of 360 cameras and also have our own
              dedicated apps to capture 360 photos and bring our own space to
              this fight
            </p>
          </SingleItem>
          <SingleItem>
            <h5>No Servers To Maintain</h5>
            <p>
              We support a large variety of 360 cameras and also have our own
              dedicated apps to capture 360 photos and bring our own space to
              this fight
            </p>
          </SingleItem>
          <SingleItem>
            <h5>Automatic Scaling With CDN</h5>
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
  margin-top: 100px;
`;
const Header = styled.div`
  padding-left: 0.8rem;
  h3 {
    margin-bottom: 8px;
  }
  .title-desc {
    font-weight: 300;
    letter-spacing: -1px;
    font-size: 16px;
    @media (min-width: 800px) {
      font-size: 20px;
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
  padding: 1.3rem 0.8rem;
  cursor: pointer;
  transition: 0.3s ease;
  margin-bottom: 10px;
  h5 {
    margin-bottom: 0px;
    transition: 0.3s ease;
    @media (max-width: 600px) {
      margin-bottom: 8px;
    }
  }
  p {
    font-size: 12px;
    margin: 0;
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
export default BuildScalable;
