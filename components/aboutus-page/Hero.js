import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <Wrapper>
      <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  
  max-width: 808px;
  text-align: center;
  margin: 100px auto;
  @media (max-width: 600px) {
    margin: 30px auto;
    margin-top: 0;
  }
  h1 {
    margin: 0;
    word-spacing: 5px;
    line-height: 65px;
    @media (max-width: 600px) {
      font-size: 24px;
      word-spacing: 2px;
      line-height: 45px;
    }
  }
`;
export default Hero;
