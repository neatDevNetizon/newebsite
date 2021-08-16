import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import c21 from '../images/c21.png';
import c23 from '../images/c23.png';
import c22 from '../images/c22.png';
import Image from 'next/image';
const WebinarTraining = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Wrapper>
      <section className='section absolute'>
        <h3>Webinars and Training</h3>

        <Slider {...settings} className='slider'>
          <div className='wrapper'>
            <div className="bagdeFor">
              <Image src={c23} alt='' />
              <div className="badge">
                <a>Free</a>
              </div>
            </div>
            <div className='content'>
              <h5>Photography Masterclass: A Complete Guide to Photography</h5>
              <p className='body2'>Skill1, skil2, skill3, skill4</p>
            </div>
          </div>
          <div className='wrapper'>
            <div className="bagdeFor">
              <Image src={c22} alt='' />
              <div className="badge">
                <a>Free</a>
              </div>
            </div>
            <div className='content'>
              <h5>Photography Masterclass: A Complete Guide to Photography</h5>
              <p className='body2'>Skill1, skil2, skill3, skill4</p>
            </div>
          </div>
          <div className='wrapper'>
            <div className="bagdeFor">
              <Image src={c21} alt='' />
              <div className="badge">
                <a>Free</a>
              </div>
            </div>
            <div className='content'>
              <h5>Photography Masterclass: A Complete Guide to Photography</h5>
              <p className='body2'>Skill1, skil2, skill3, skill4</p>
            </div>
          </div>
          <div className='wrapper'>
            <div className="bagdeFor">
              <Image src={c22} alt='' />
              <div className="badge">
                <a>Free</a>
              </div>
            </div>
            <div className='content'>
              <h5>Photography Masterclass: A Complete Guide to Photography</h5>
              <p className='body2'>Skill1, skil2, skill3, skill4</p>
            </div>
          </div>
          <div className='wrapper'>
            <div className="bagdeFor">
              <Image src={c21} alt='' />
              <div className="badge">
                <a>Free</a>
              </div>
            </div>
            <div className='content'>
              <h5>Photography Masterclass: A Complete Guide to Photography</h5>
              <p className='body2'>Skill1, skil2, skill3, skill4</p>
            </div>
            
          </div>
        </Slider>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 473px;
  background-color: #707070;
  position: relative;
  margin-top: 120px;
  @media (max-width: 600px) {
    margin-top: 80px;
  }
  .section {
    padding-left: 1rem;
    max-width: 1200px;

    @media (max-width: 1000px) {
      padding-left: 0rem;
    }
    h3 {
      margin-bottom: 65px;
      text-align: left;
      font-size: 34px;
      font-weight: bold;
      @media (max-width: 1070px) {
        text-align: center;
      }
    }
  }
  .absolute {
    position: absolute;
    top: -40%;
    left: 50%;
    transform: translateX(-50%);
  }
  .bagdeFor {
    position: relative;
  }

  @media screen and (min-width: 601px) and (max-width: 900px) {
    .slick-slide {
      margin: 0 10px;
    }
    .slick-list {
      margin: 0 -10px;
    }
  }

  .wrapper {
    width: 80%;
    background-color: #fff;
    max-width: 378px;
    border-radius: 10px;

    /* height: 486px; */

    /* @media (max-width: 700px) {
        height: 396px;
      } */

    img {
      width: 100%;
    }
    .badge {
      position: absolute;
      bottom: 30px;
      right: 20px;
      a {
        color: white;
        padding: 8px 14px;
        border-radius: 20px;
        background-color: #33B864;
      }
    }

    .content {
      padding: 1.5rem;
      h5 {
        letter-spacing: 0;
        font-weight: 600;
      }
      p {
        color: #707070;
      }
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;

      .left {
        display: flex;
        align-items: center;
        gap: 1rem;
        img {
          height: 36px;
          width: 36px;
          object-fit: cover;
        }
      }
      .right {
        .body2 {
          margin: 0;
          margin-bottom: 0.3rem;
        }
        h4 {
          color: #707070;
          margin-bottom: 0;
        }
      }
    }
  }

  .slick-arrow {
    height: 46px;
    width: 46px;
    border-radius: 50%;
    background-color: #e4e4eb;
    border: 2px solid #222;
    color: #222;
    z-index: 99;

    @media (min-width: 1080px) {
      position: absolute;
      top: -110px;
    }
    @media (max-width: 1079px) {
      position: absolute;
      top: 30%;
      background-color: rgba(255, 255, 255, 0.5);
      height: 30px;
      width: 20px;
      border-radius: 0;
      color: #fff;
      border: none;
    }
  }
  .slick-prev {
    @media (min-width: 1080px) {
      left: 86%;
      transform: translateX(-40%);
    }
    @media (max-width: 650px) {
      margin-left: 10px;
    }

    :before {
      content: url('images/left-arrow.png');
      font-weight: 900;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .slick-next {
    @media (min-width: 1080px) {
      left: 93%;
      transform: translateX(-50%);
    }
    @media (max-width: 650px) {
      margin-right: 10px;
    }

    :before {
      content: url('images/right-arrow.png');
      z-index: 22;
      font-weight: 900;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    /* @media (max-width: 900px) {
      left: 60%;
      transform: translateX(-60%);
    } */
  }
`;
export default WebinarTraining;
