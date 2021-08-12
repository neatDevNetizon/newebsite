import React from 'react';
import styled from 'styled-components';
import heroImg from './../../images/hero-blog.png';
import Image from 'next/image';
const HeroBlog = () => {
  return (
    <Wrapper className='section'>
      <div className='image-container'>
        <Image src={heroImg} alt='' />
      </div>
      <div className='content'>
        <div className='left'>
          <h1>3D For Travel & Hospitality</h1>
          <p>
            From vacation rentals, to hotels and event spaces, you can elevate
            the promotion of your business with 3D tours that increase bookings,
            drive higher occupancy rates, and increase engagement rates.
          </p>
        </div>
        <div className='right'>
          <div className='div1'>
            <h1>18%</h1>
            <p>lorem Ipsum</p>
          </div>
          <div className='div2'>
            <h1>265%</h1>
            <p>lorem Ipsum</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  position: relative;
  margin-bottom: 200px;
  @media (max-width: 999px) {
    margin-bottom: 0px;
  }
  .image-container {
    width: 95%;
    max-width: 1099px;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  .content {
    max-width: 1089px;
    box-shadow: var(--shadow-2);
    display: grid;
    align-items: flex-end;
    background-color: #fff;
    gap: 1rem;
    padding: 1.5rem;
    margin: 1rem auto;
    border-radius: 10px;
    @media (min-width: 1060px) {
      position: absolute;
      bottom: -30%;
      left: -3%;
      z-index: 2;
    }

    @media (min-width: 960px) {
      grid-template-columns: 2fr 1fr;
    }
    .left {
      h1 {
        letter-spacing: -1px;
      }
      p {
      }
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 1.4rem;
      .div1,
      .div2 {
        h1 {
          color: #33b864;
          margin-bottom: 1rem;
        }
      }
    }
  }
`;
export default HeroBlog;
