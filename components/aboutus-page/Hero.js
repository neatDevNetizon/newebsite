import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Image from 'next/image';
import manager from '../../images/middle2.png'

const Hero = () => {
  return (
    <Wrapper>
      <div className='bg'>
        {/* <div className='curve'></div> */}
        <Navbar />
        <HeroSection className='section'>
          <div className="hero-contents">
            <div>
              <Image src={manager} className="manager"/>
            </div>
            <div className="hero-desc">
              <h3>
                “Microacquire Helps Startups Find Buyers. Simple As That. We’ll Help You Start Conversations That Lead To An Acquisition In Just 30 Days – For Free.“
              </h3>
              <h2>
                Vineet Devaiah
              </h2>
              <h5>
                CEO at TeliportMe  
              </h5>
            </div>
          </div>
          <div className="mobile-hero">
            <div className="hero-desc">
              <h3>
                “Microacquire Helps Startups Find Buyers. Simple As That. We’ll Help You Start Conversations That Lead To An Acquisition In Just 30 Days – For Free.“
              </h3>
              <div className="mobile-manager">
                <div>
                  <Image src={manager} className="manager"/>
                </div>
                <div>
                  <h2>
                    Vineet Devaiah
                  </h2>
                  <h5>
                    CEO at TeliportMe  
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </HeroSection>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  @media (max-width: 600px) {
    margin-bottom: 30px;
  }

  .bg {
    // height: 75vh;
    // min-height: 620px;
    // background: url('images/bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: right;
    position: relative;
    overflow: hidden;
    // @media (max-width: 800px) {
    //   height: 80vh;
    // }
    // @media (max-width: 400px) {
    //   height: 80vh;
    // }
    // @media (max-width: 330px) {
    //   height: 80vh;
    // }
    ::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        to right,
        rgba(255, 214, 117, 0.3) 0%,
        rgba(255, 214, 117, 0.1) 30%,
        rgba(255, 214, 117, 0.6) 100%
      );
      z-index: 1;
    }
  }

  .curve {
    width: 100%;
    height: 65px;
    background-color: #fff;
    border-radius: 0 0 50% 50%/0 0 100% 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 3;
    transform: rotate(180deg) scaleX(1.1);
  }
`;

const HeroSection = styled.div`
  @media (max-width: 800px) {
    padding-top: 80px;
  }
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  z-index: 10;
  width: 90vw;
  margin-top: -1rem;
  position: relative;

  .hero-contents {
    margin-top: 100px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    @media (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
      margin-top: 0px;
      display: none;
    }
  }
  .mobile-hero {
    display: none;
    @media (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
      margin-top: 0px;
      display: block;
    }
    .mobile-manager {
      display: flex;
    }
    .mobile-manager div:first-child {
      width: 80px;
      height: 100px;
      margin-bottom: 50px;
    }
    .mobile-manager div:last-child {
      margin-left: 20px;
    }
  }
  .hero-contents div:first-child {
    width: 330px;
    height: 440px;
    @media (max-width: 800px) {
      width: 200px;
      height: 250px;
    }
  }
  .hero-desc {
    padding: 5px 0px 50px 50px;
    @media (max-width: 600px) {
      padding: 40px 0px 0px 0px;
    }
    h3 {
      color: #262525;
      font-size: 36px;
      font-weight: 500;
      letter-spacing: 1px;
      @media (max-width: 800px) {
        font-size: 20px;
      }
    }
    h2 {
      margin-top: 100px;
      font-size: 36px;
      font-weight: 800;
      @media (max-width: 800px) {
        font-size: 22px;
        margin-top: 20px;
      }
    }
    h5 {
      font-size: 22px;
      font-weight: normal;
      @media (max-width: 800px) {
        font-size: 16px;
      }
    }
  }
  .manager {
    object-fit: cover;
    
  }
  @media (max-width: 799px) {
    margin-top: 0rem;
  }
  .create {
    margin-bottom: 5px;
    letter-spacing: 4px;
    font-weight: 500;
    margin-left: 6.7rem;
    position: relative;
    text-transform: capitalize;
    @media (max-width: 600px) {
      font-size: 12px;
      margin-left: 6.7rem;
      display: none;
    }
    ::before {
      content: '';
      height: 2px;
      width: 56px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -100px;
      background-color: #222;
    }
  }
  .title {
    max-width: 763px;
    letter-spacing: -1px;
    text-transform: none;
    font-weight: 500;
    line-height: 1.3;
    font-size: 60px;
    font-weight: 800;
    color: rgb(38, 37, 37);
    @media (max-width: 600px) {
      font-size: 36px;
      margin: 0;
    }
    @media (max-width: 450px) {
      font-size: 29px;
      margin: 0;
    }
    @media (max-width: 330px) {
      font-size: 20px;
      margin: 0;
      line-height: 1.2;
    }
  }
  .trust {
    font-size: 14px;
    margin-bottom: 20px;
    max-width: 542px;
    @media (max-width: 600px) {
      font-size: 11px;
      margin: 0;
    }
    @media (max-width: 330px) {
      font-size: 10px;
    }
    span {
      color: #33b864;
      font-weight: 700;
      margin: 0 2px;
      @media (max-width: 600px) {
        font-size: 14px;
      }
    }
  }

  h1 {
    margin: 0;
    word-spacing: 5px;
    line-height: 65px;
    @media (max-width: 600px) {
      line-height: 40px;
    }
  }
  .btn-container {
    margin-top: 0;
    display: flex;
    gap: 2rem;
    @media (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 0.5rem;
      gap: 1rem;
    }
    .btn {
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
      transition: 0.3s ease;
      &:hover {
        clip-path: polygon(5% 0, 100% 0, 95% 100%, 0 100%);
        font-size: 14px;
        :after {
          width: 100%;
          content: '';
          height: 2px;
          position: absolute;
          bottom: 5px;
          left: 0;
          background-color: #fff;
        }
      }
    }
    .trial-btn {
      background-color: #3AC035;
      width: 262px;
      height: 56px;
      font-weight: 700;
      @media (max-width: 600px) {
        width: 100%;
        height: 40px;
        font-weight: 600;
      }
      @media (max-width: 330px) {
        height: 30px;
        font-weight: 500;
        font-size: 14px;
      }
    }
  }
`;
export default Hero;
