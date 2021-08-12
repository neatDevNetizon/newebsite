import React from 'react';
import styled from 'styled-components';
import middleImg from './../../images/blog-tour.png';
import Image from 'next/image';
const MiddleImg = () => {
  return (
    <Middle className='section'>
      <Image src={middleImg} alt='' />
    </Middle>
  );
};
const Middle = styled.section`
  margin-bottom: 100px;
  @media (max-width: 900px) {
    margin-bottom: -30px;
  }
  img {
    width: 100%;
  }
`;
export default MiddleImg;
