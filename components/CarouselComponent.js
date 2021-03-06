import React, { useState } from 'react';
import { ImQuotesRight } from 'react-icons/im';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import man from './../images/man.jpeg';
import man2 from './../images/man2.jpeg';
import quote from './../images/quote-icon.png';
import Image from 'next/image';
const data = [
  {
    img: man,
    heading1: 'Experts highly',
    heading2: 'Recomanded us',
    review: ` Testimonials or quotes from your customers are one of the most common forms of customer reviews. You’re most likely to find them on a company website. `,
    heading3: 'Shanto',
    heading4: 'Frontend Developer',
  },
  {
    img: man2,
    heading1: 'Experts highly',
    heading2: 'Recomanded us',
    review: ` We will definitely use this app for our futere  customers in
              the realstate and small business...!  Excellent solutions`,
    heading3: 'sandro',
    heading4: 'Seo Web Milan',
  },
];
const CarouselComponent = () => {
  const settings = {
    className: '',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
    <CarouselWrapper>
      <section className='section '>
        <Slider {...settings} className='slider'>
          <div className='container'>
            <div className='left'>
              <div className='img-container'>
                <Image src={man} alt='' />
              </div>
            </div>
            <div className='right'>
              <h3>Powering our tours</h3>
              <p className='review'>
              We will definitely use this APP for our future customers in realestate and small business ...! Excellent solution 👌❤️
              </p>
              <div className='writer'>
                <h4>Shanto</h4>
                <h6>VP of Photography</h6>
                <p>Frontend Developer</p>
              </div>
              <div className="mobile-carousel">
                <div className='mobile-image'>
                  <Image src={man} alt='' />
                </div>
                <div className='mobile-writer'>
                  <h4>Shanto</h4>
                  <h6>VP of Photography</h6>
                  <p>Frontend Developer</p>
                </div>
              </div>
            </div>
          </div>

          <div className='container'>
            <div className='left'>
              <div className='img-container'>
                <Image src={man2} alt='' />
              </div>
            </div>
            <div className='right'>
              <h3>Powering our tours</h3>
              <p className='review'>
                We will definitely use this APP for our future customers in realestate and small business ...! Excellent solution 👌❤️
              </p>
              <div className="mobile-carousel">
                <div className='mobile-image'>
                  <Image src={man2} alt='' />
                </div>
                <div className='mobile-writer'>
                  <h4>Sandro</h4>
                  <h6>VP of Photography</h6>
                  <p>Seo Web Milan</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      {/* 
      <CarouselWrapper>
        <Wrapper>
          <div className='container'>
            <div className='left'>
              <div className='img-container'>
                <Image src={img} alt='' />
              </div>
            </div>
            <div className='right'>
              <p className='review'>{review}</p>
              <div className='writer'>
                <h4>{heading3}</h4>
                <p>{heading4}</p>
              </div>
            </div>
          </div>
          <div className='carousel-btn'>
            <div className='left-btn'>
              <MdKeyboardArrowLeft onClick={decrease} />
            </div>
            <div className='right-btn'>
              <MdKeyboardArrowRight onClick={increase} />
            </div>
          </div>
        </Wrapper>
      </CarouselWrapper> */}
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  padding: 8rem 0rem;
  position: relative;
  @media(max-width: 600px) {
    padding: 2rem 0rem;
  }
  .container {

    display: grid !important;
    background-color: #FFE8B9;
    width: 90vw;
    max-width: 900px;
    padding: 3rem;
    margin: 0 auto;
    border-radius: 10px;
    height: max-content;

    @media (min-width: 900px) {
      grid-template-columns: 320px 1fr;
    }
    @media (max-width: 600px) {
      padding: 3rem 2rem;
    }
  }
  .slick-slide {
    @media(max-width: 600px){
      padding: 0px 10px;
    }
  }
  .left {
    /* position: relative; */
    text-align: center;
    @media (max-width: 900px) {
      display: flex;
      justify-content: center;
    }
    @media (max-width: 600px) {
      display: none;
    }
  }
  .mobile-carousel {
    display: none;
    @media(max-width: 600px) {
      display: flex;
    }
    .mobile-writer {
      display: none;
      @media(max-width: 600px) {
        display: block;
      }
    }
    .mobile-image {
      min-width: 100px;
      width: 100px;
      height: 130px;
    }
    .mobile-writer {
      padding-left: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      h4 {
        font-weight: 600;
        letter-spacing: 2px;
        margin-bottom: 0.3rem;
        font-size: 24px;
      }
      p {
        font-weight: 600;
        /* position: relative; */
        margin: 0;
        letter-spacing: 3px;
        word-spacing: 5px;
  
        /* ::before {
          content: '';
          height: 2px;
          width: 25px;
          position: absolute;
          top: 50%;
          left: -50px;
          background-color: #efbe84;
        } */
      }
    }
  }
  .img-container {
    margin-bottom: 1rem;
    border-radius: 10px;
    width: 250px;
    height: 300px;
    object-fit: cover;
    overflow: hidden;
    @media (max-width: 600px) {
      height: 150px;
      width: 120px;
      max-width: 280px;
    }

    img {
      max-height: 100%;
      width: 100%;
      border-radius: 5px;
      object-fit: cover;
      @media (max-width: 600px) {
        height: 230px;
      }
    }
  }
  .heading {
    display: flex;
    align-items: flex-end;
    gap: 2rem;
    margin-bottom: 3rem;
    svg {
      font-size: 45px;
      color: #565658;
      margin-bottom: -10px;
    }
    p {
      margin-bottom: 0.5rem;
      font-size: 20px;
      color: #565658;
      font-weight: 400;
    }
    h3 {
      letter-spacing: 1px;
      margin-bottom: 0;
      /* font-size: 34px; */
    }
  }
  .review {
    margin-top: 1rem;
    font-size: 20px;
    letter-spacing: 0px;
    /* position: relative; */
    padding-right: 1.2rem;
    @media (max-width: 600px) {
      font-size: 14px;
    }
    ::before {
      content: '';
      height: 30px;
      width: 2px;
      position: absolute;
      top: 5px;
      left: -20px;
      background-color: #efbe84;
    }
  }
  .writer {
    @media (max-width: 600px) {
      display: none;
    }
    margin-top: 2rem;
    h4 {
      font-weight: 600;
      letter-spacing: 2px;
      margin-bottom: 0.3rem;
      font-size: 24px;
    }
    p {
      font-weight: 600;
      /* position: relative; */
      margin: 0;
      letter-spacing: 3px;
      word-spacing: 5px;

      /* ::before {
        content: '';
        height: 2px;
        width: 25px;
        position: absolute;
        top: 50%;
        left: -50px;
        background-color: #efbe84;
      } */
    }
  }

  .slick-arrow {
    height: 46px;
    width: 46px;
    border-radius: 50%;
    background-color: #e4e4eb;
    border: 2px solid #222;
    color: #222;
    z-index: 999999;
    top: 93%;
    position: absolute;
    @media (max-width: 900px) {
      top: 95%;
    }
    @media (max-width: 700px) {
      top: 98%;
    }
  }
  .slick-prev {
    left: 45%;
    transform: translateX(-45%);
    @media (max-width: 700px) {
      left: 35%;
      transform: translateX(-35%);
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
    left: 55%;
    transform: translateX(-55%);
    @media (max-width: 700px) {
      left: 65%;
      transform: translateX(-65%);
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
export default CarouselComponent;
