import React, { useState } from 'react';
import styled from 'styled-components';
import image1 from './../images/Image1.png';
import Image from 'next/image';
const CustomizeTour = () => {
  const [active, setActive] = useState({
    tour1: true,
    tour2: false,
    tour3: false,
    tour4: false,
    tour5: false,
    tour6: false,
  });
  return (
    <Wrapper className='section'>
      <div className='container'>
        <div className='content'>
          <h3>Customize Your Tour Branding</h3>
          <p className='body2'>
            Experience 360 photos. Supported on Oculus Go, Samsung Gear VR,
            Android and iOS.
          </p>
          <div className='btn-container'>
            <button
              className={
                active.tour1 ? 'btn player-btn active' : 'btn player-btn'
              }
              onClick={() => setActive({ tour1: true })}
            >
              Virtual Reality player
            </button>

            <button
              className={
                active.tour2 ? 'btn player-btn active' : 'btn player-btn'
              }
              onClick={() => setActive({ tour2: true })}
            >
              Virtual Reality player
            </button>

            <button
              className={
                active.tour3 ? 'btn player-btn active' : 'btn player-btn'
              }
              onClick={() => setActive({ tour3: true })}
            >
              Virtual Reality player
            </button>

            <button
              className={
                active.tour4 ? 'btn player-btn active' : 'btn player-btn'
              }
              onClick={() => setActive({ tour4: true })}
            >
              Virtual Reality player
            </button>

            <button
              className={
                active.tour5 ? 'btn player-btn active' : 'btn player-btn'
              }
              onClick={() => setActive({ tour5: true })}
            >
              Virtual Reality player
            </button>
            <button
              className={
                active.tour6 ? 'btn player-btn active' : 'btn player-btn'
              }
              onClick={() => setActive({ tour6: true })}
            >
              Virtual Reality player
            </button>
          </div>
        </div>
        <div className='img-container'>
          <Image src={image1} alt='' />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-bottom: 135px;
  .container {
    display: grid;
    gap: 1rem 5rem;
    align-items: center;
    overflow: hidden;

    @media (min-width: 1100px) {
      grid-template-columns: 1fr 2fr;
    }
    .content {
      @media (max-width: 600px) {
        display: flex;
        align-items: center;
        flex-direction: column;
      }
    }
    .btn-container {
      @media (max-width: 600px) {
        display: flex;
        align-items: center;
        flex-direction: column;
      }
    }
    h3 {
      line-height: 55px;
      letter-spacing: 2px;
      @media (max-width: 600px) {
        line-height: 35px;
        text-align: center;
      }
    }
    .body2 {
      max-width: 269px;
    }
    .player-btn {
      background-color: #e4e4eb;
      height: 46px;
      width: 286px;
      color: #262525;
      font-size: 14px;
      font-weight: 600;
      clip-path: polygon(8% 0, 95% 0, 100% 50%, 90% 100%, 0 100%);
      margin-bottom: 25px;
    }
    .active {
      background-color: #262525;
      color: #fff;
    }
  }
  .img-container {
    img {
      width: 100%;
    }
  }
`;
export default CustomizeTour;
