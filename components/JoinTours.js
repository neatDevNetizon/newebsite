import React from 'react';
import styled from 'styled-components';

import center from './../images/center.png';
import top1 from './../images/top1.png';
import right from './../images/right.png';
import left from './../images/left.png';
import blob from './../images/blob.png';
import bottom2 from './../images/bottom2.png';
import Image from 'next/image';
const JoinTours = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='right'>
          <div className='blob'>
            <Image src={blob} alt='' />
          </div>
          <div className='right-container'>
            <h3>
              Join Millions Of <br /> 360 Virtual Tour Creators
            </h3>
            <p>
              P360 is a strong community of over 15 million creators around the
              world in over 180 countries. Best-in-class tools combined with an
              infinte creative canvas means that we are our home to the
              world&apos;s best 360 professionals that for your immersive
              inspiration.
            </p>
            <button className='btn trial-btn'>Start Free Trial</button>
          </div>
        </div>
        <div className='left'>
          <div className='img1'>
            <Image src={center} alt='' />
          </div>
          <div className='top1'>
            <Image src={top1} alt='' />
          </div>
          <div className='top2'>
            <Image src={right} alt='' />
          </div>
          <div className='bottom1'>
            <Image src={left} alt='' />
          </div>
          <div className='bottom2'>
            <Image src={bottom2} alt='' />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  overflow: hidden;
  .container {
    min-height: 870px;
    display: grid;
    margin: 100px auto;
    max-width: 1366px;
    @media (min-width: 1100px) {
      grid-template-columns: 1fr 650px;
    }
    @media (max-width: 1099px) {
      margin-bottom: 30px;
    }
    .left {
      position: relative;
      .img1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .top1 {
        position: absolute;
        top: 15%;
        left: 20%;
        @media (max-width: 1100px) {
          display: none;
        }
      }
      .top2 {
        position: absolute;
        top: 20%;
        right: 10%;
        @media (max-width: 1100px) {
          display: none;
        }
      }
      .bottom1 {
        position: absolute;
        bottom: 20%;
        left: 10%;
        @media (max-width: 1100px) {
          display: none;
        }
      }
      .bottom2 {
        position: absolute;
        bottom: 10%;
        right: 10%;
        @media (max-width: 1100px) {
          display: none;
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 1250px) {
        .blob {
          display: none;
        }
      }
    }
    .blob {
      min-width: 600px;
      img{
        opacity: 0.4;
      }
    }
    .right-container {
      position: absolute;
      max-width: 80vw;
      h3 {
        line-height: 55px;
        color: #111827;
        font-weight: bold;
      }
      p {
        max-width: 450px;
        color: #6B7280;
        font-size: 20px;
      }
      .trial-btn {
        height: 46px;
        width: 239px;
        background-color: #33b864;
        margin-top: 50px;
        margin-left: 30px;
        @media (max-width: 600px) {
          margin-left: 0px;
          width: 100%;
        }
      }
    }
  }
`;
export default JoinTours;
