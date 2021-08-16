import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import c1 from './../images/c1.png';
import c2 from './../images/c2.png';
import c3 from './../images/c3.png';
import daniel from './../images/daniel.png';
import Image from 'next/image';
const LearnMoreCarousel = () => {
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
        <h3>Helpful Resources</h3>

        <Slider {...settings} className='slider'>
          <div className='wrapper'>
            <Image src={c1} alt='' />
            <div className='content'>
              <h5>Understanding TeliportMe cul..</h5>
              <p className='body2'>
                Culture is a heavy word, its not something that can be measured
                yet can be felt within the confines of an office space,
                interactions of your product and behaviour of
              </p>
              <div className='footer'>
                <div className='left'>
                  <Image src={daniel} alt='' />
                  <p>Vineet Devaiah</p>
                </div>
                <div className='right'>
                  <p className='body2'>Jun 2021</p>
                  <h4>05</h4>
                </div>
              </div>
            </div>
          </div>

          <div className='wrapper'>
            <Image src={c2} alt='' />
            <div className='content'>
              <h5>Structure to the Culture Prob..</h5>
              <p className='body2'>
                Culture is a heavy word, its not something that can be measured
                yet can be felt within the confines of an office space,
                interactions of your product and behaviour of
              </p>
              <div className='footer'>
                <div className='left'>
                  <Image src={daniel} alt='' />
                  <p>Vineet Devaiah</p>
                </div>
                <div className='right'>
                  <p className='body2'>Jun 2021</p>
                  <h4>05</h4>
                </div>
              </div>
            </div>
          </div>

          <div className='wrapper'>
            <Image src={c3} alt='' />
            <div className='content'>
              <h5>AR needs a visual API for the..</h5>
              <p className='body2'>
                Culture is a heavy word, its not something that can be measured
                yet can be felt within the confines of an office space,
                interactions of your product and behaviour of
              </p>
              <div className='footer'>
                <div className='left'>
                  <Image src={daniel} alt='' />
                  <p>Vineet Devaiah</p>
                </div>
                <div className='right'>
                  <p className='body2'>Jun 2021</p>
                  <h4>05</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='wrapper'>
            <Image src={c1} alt='' />
            <div className='content'>
              <h5>Understanding TeliportMe cul..</h5>
              <p className='body2'>
                Culture is a heavy word, its not something that can be measured
                yet can be felt within the confines of an office space,
                interactions of your product and behaviour of
              </p>
              <div className='footer'>
                <div className='left'>
                  <Image src={daniel} alt='' />
                  <p>Vineet Devaiah</p>
                </div>
                <div className='right'>
                  <p className='body2'>Jun 2021</p>
                  <h4>05</h4>
                </div>
              </div>
            </div>
          </div>

          <div className='wrapper'>
            <Image src={c2} alt='' />
            <div className='content'>
              <h5>Understanding TeliportMe cul..</h5>
              <p className='body2'>
                Culture is a heavy word, its not something that can be measured
                yet can be felt within the confines of an office space,
                interactions of your product and behaviour of
              </p>
              <div className='footer'>
                <div className='left'>
                  <Image src={daniel} alt='' />
                  <p>Vineet Devaiah</p>
                </div>
                <div className='right'>
                  <p className='body2'>Jun 2021</p>
                  <h4>05</h4>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: #ffe8b9;
  min-height: 473px;
  position: relative;
  margin-top: 400px;
  @media (max-width: 600px) {
    margin-top: 250px;
  }
  .h3 {
    font-size: 40px;
    color: #111827;
  }
  .section {
    width: 90vw;
    max-width: 1200px;
    margin: 0 auto;
    h3 {
      margin-bottom: 65px;
      text-align: left;
      @media (max-width: 900px) {
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
  @media screen and (min-width: 601px) and (max-width: 900px) {
    .slick-slide {
      margin: 0 10px;
    }
    .slick-list {
      margin: 0 -10px;
    }
  }
  .slider {
    .wrapper {
      width: 100%;
      background-color: #fff;
      max-width: 378px;
      border-radius: 10px;
      min-height: 486px;

      img {
        width: 100%;
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
          object-fit: none;
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
    // position: absolute;
    // top: -17%;
    height: 46px;
    width: 46px;
    border-radius: 50%;
    background-color: #e4e4eb;
    border: 2px solid #222;
    color: #222;
    z-index: 99;
    @media (max-width: 900px) {
      top: -6%;
    }
    @media (max-width: 600px) {
      top: -12%;
    }
  }
  .slick-prev {
    // left: 65%;
    @media (max-width: 900px) {
      left: 40%;
      transform: translateX(-40%);
    }
    :before {
      content: url('images/left-arrow.png');
      color: #222;
      font-weight: 900;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .slick-next {
    left: 96.3%;
    @media (max-width: 900px) {
      left: 60%;
      transform: translateX(-60%);
    }
    :before {
      content: url('images/right-arrow.png');
      color: #222;
      font-weight: 900;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
export default LearnMoreCarousel;
