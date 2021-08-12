import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const PricingPlanCarousel = ({ yearly }) => {
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
    <Wrapper className='section'>
      <Mobile>
        <Slider {...settings} className='slider'>
          <div className='single'>
            <h4>Community</h4>
            <h3>Free</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              eleifend ultricies mollis. Suspendisse potenti.
            </p>

            <p className='time'>All Time</p>
            <button className='btn plan-btn'>Start Free Trial</button>
          </div>

          <div className='single'>
            <h4>Essential</h4>
            <h3>{yearly ? '$250' : '$30'}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              eleifend ultricies mollis. Suspendisse potenti.
            </p>

            <p className='time'>{yearly ? 'Per Year' : 'Per Months'}</p>
            <button className='btn plan-btn'>Start Free Trial</button>
          </div>

          <div className='single recommended'>
            <div className='recommended-btn'>Recommended</div>
            <h4>Business</h4>
            <h3>{yearly ? '$350' : '$50'}</h3>
            <p className='time'>{yearly ? 'Per Year' : 'Per Months'}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              eleifend ultricies mollis. Suspendisse potenti.
            </p>

            <button className='btn plan-btn recomand-plan'>
              Start Free Trial
            </button>
          </div>

          <div className='single'>
            <h4>Enterprise</h4>
            <h3>Custom</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              eleifend ultricies mollis. Suspendisse potenti.
            </p>

            <p className='time'>Contact Us</p>
            <button className='btn plan-btn'>Start Free Trial</button>
          </div>
        </Slider>
      </Mobile>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  @media (min-width: 601px) {
    display: none !important;
  }
`;
const Mobile = styled.div`
  /* position: relative;
  display: block; */
  .slider {
    overflow: visible !important;
  }
  .single {
    text-align: center;
    height: 428px;
    border-radius: 15px;
    box-shadow: var(--shadow-3);
    width: 276px;
    padding: 3rem 0;

    h4 {
      margin-bottom: 30px;
      color: #fc9e0d;
      font-size: 20px;
    }

    p {
      max-width: 185px;
      margin: 0 auto;
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 30px;
      line-height: 21px;
    }
  }
  .recommended {
    overflow: visible !important;
    /* margin-top: -100px !important; */
    height: 468px;
    background-color: #000000;
    border: 1px solid #fad096;
    color: #fff;
    margin-bottom: 2rem;
    h3 {
      color: #fff;
    }
    @media (max-width: 955px) {
      margin-top: 3.5rem;
    }
  }
  .recommended-btn {
    height: 47px;
    width: 181px;
    background-color: #f5bc63;
    color: #fff;
    font-size: 14px;
    display: flex;
    font-weight: 500;
    align-items: center;
    justify-content: center;
    margin-top: -6rem;
    margin-bottom: 4rem;
    margin-left: 2rem;
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .plan-btn {
    height: 46px;
    width: 164px;
    background-color: transparent;
    color: #222;
    box-shadow: none;
    border: 1px solid #707070;
    font-size: 14px;
  }
  .recomand-plan {
    background: #33b864;
    color: #fff;
    margin-top: 1.5rem;
  }
  .slick-arrow {
    height: 46px;
    width: 46px;
    border-radius: 50%;
    background-color: #e4e4eb;
    border: 2px solid #222;
    color: #222;
    z-index: 999999;
    top: -10%;
    position: absolute;
  }
  .slick-prev {
    left: 40%;
    transform: translateX(-40%);
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
    left: 65%;
    transform: translatex(-65%);
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
export default PricingPlanCarousel;
