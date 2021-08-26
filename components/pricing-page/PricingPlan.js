import React, { useState } from 'react';
import styled from 'styled-components';
import checked from '../../images/check.png';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import PricingPlanCarousel from './PricingPlanCarousel';
const PricingPlan = () => {
  const settings = {
    className: '',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1268,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
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
    ],
  };
  const [yearly, setYearly] = useState(false);
  return (
    <>
      <Wrapper className='section'>
        <div className='header'>
          <p className={yearly?"monthly ": "monthly active"}>
            Monthly billing <br />
            <span>no contract</span>
          </p>
          <label className='switch'>
            <input
              type='checkbox'
              onChange={(e) => setYearly(e.target.checked)}
            />
            <span className='spinner round'></span>
          </label>
          <div className="annual">
            <p className={yearly?" active": ""}>
              Annual billing <br /> <span>20% </span>Off
            </p>
          </div>
        </div>
        <div >
          <Slider {...settings} className="container">
            <div className='single' >
              <h4>Community</h4>
              <h3>Free</h3>
              <div className="plan-pointer">
              <label className='time'></label>
              </div>
              <div className="plan-desc">
                <Image src={checked} alt="checked" className='checked'/>
                <label>
                  Lorem ipsum dolor sit amet,
                </label>
              </div>
              <div className="plan-desc">
                <Image src={checked} alt="checked" className='checked'/>
                <label>
                  consectetur adipiscing elit. 
                </label>
              </div>
              <div className="plan-desc">
                <Image src={checked} alt="checked" className='checked'/>
                <label>
                  In eleifend ultricies mollis.
                </label>
              </div>
              <div className="plan-desc">
                <Image src={checked} alt="checked" className='checked'/>
                <label>
                  Suspendisse potenti.
                </label>
              </div>
              <button className='btn plan-btn'>Start Free Trial</button>
            </div>

            <div className='single '>
              <h4>Essential</h4>
              <h3>{yearly ? '$250' : '$30'}</h3>
              <div className="plan-pointer">
                <label className='time'>{yearly ? 'Per Year' : 'Per Months'}</label>
              </div>
              <div className="plan-desc">
                <Image src={checked} alt="checked" className='checked'/>
                <label>
                  Lorem ipsum dolor sit amet,
                </label>
              </div>
              <div className="plan-desc">
                <Image src={checked} alt="checked" className='checked'/>
                <label>
                  consectetur adipiscing elit. 
                </label>
              </div>
              <div className="plan-desc">
                <Image src={checked} alt="checked" className='checked'/>
                <label>
                  In eleifend ultricies mollis.
                </label>
              </div>
              <div className="plan-desc">
                <Image src={checked} alt="checked" className='checked'/>
                <label>
                  Suspendisse potenti.
                </label>
              </div>
              <button className='btn plan-btn'>Start Free Trial</button>
            </div>

            <div className='single  recommended'>
              <div className='recommended-btn'>Recommended</div>
              <h4>Business</h4>
              <h3>{yearly ? '$350' : '$50'}</h3>
              <div className="plan-pointer">
                <label className='time'>{yearly ? 'Per Year' : 'Per Months'}</label>
              </div>
              <div className="plan-desc">
                <Image src={checked} alt="checked" className='checked'/>
                <label>
                  Lorem ipsum dolor sit amet,
                </label>
              </div>
              <div className="plan-desc">
                <Image src={checked} alt="checked" className='checked'/>
                <label>
                  consectetur adipiscing elit. 
                </label>
              </div>
              <div className="plan-desc">
                <Image src={checked} alt="checked" className='checked'/>
                <label>
                  In eleifend ultricies mollis.
                </label>
              </div>
              <div className="plan-desc">
                <Image src={checked} alt="checked" className='checked'/>
                <label>
                  Suspendisse potenti.
                </label>
              </div>
              <button className='btn plan-btn recomand-plan'>
                Start Free Trial
              </button>
            </div>

            <div className='single '>
              <h4>Enterprise</h4>
              <h3>Custom</h3>
              <div className="plan-pointer">
                <label className='time'></label>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                eleifend ultricies mollis. Suspendisse potenti.
              </p>

              <button className='btn plan-customBtn'>Contact Us</button>
            </div>
          </Slider>
        </div>
      </Wrapper>
      {/* <PricingPlanCarousel yearly={yearly} /> */}
    </>
  );
};
const Wrapper = styled.section`
  margin-bottom: 100px;
  .slick-list {
    padding-top: 100px !important;
    width: 100% !important;
    padding-bottom: 50px;
    .slick-slide {
      padding: 0 0.5rem;
    }
  }
  .active {
    font-weight: 700;
  }
  .monthly {
    font-size: 14px;
    margin-bottom: 0px;
  }
  /* @media (min-width: 601px) {
    .hide-desktop {
      display: none !important;
    }
  } */
  @media (max-width: 600px) {
    margin-bottom: 10px;
  }
  .header {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 406px;
    background-color: rgba(255, 185, 80, 0.12);
    padding: 20px 40px 20px 40px;
    @media (max-width: 600px) {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  .body2 {
    margin: 0;
    span {
      padding-left: 1rem;
    }
  }
  .annual {
    p {
      margin: 0;
      font-size: 14px;
      span {
        color: #05cf83;
      }
    }
  }

  .container {
    margin-top: 30px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    @media (max-width: 955px) {
      justify-content: space-around;
    }
    @media (max-width: 600px) {
      margin-top: 40px;
    }
  }
  .single {
    height: 491px;
    text-align: center;
    border-radius: 15px;
    box-shadow: var(--shadow-3);
    width: 280px;
    padding: 3rem 2rem;

    h4 {
      
      color: #fc9e0d;
      font-size: 26px;
    }
    h3 {
      font-size: 34px;
    }
    div {
      display: flex;
      align-items: center;
      label {
        font-size: 12px;
      }
    }
    img {
      width: 24px;
      height: 24px;
    }
    .plan-desc {
      margin: 10px 0px;
      label {
        margin-left: 10px;
      }
    }

    p {
      max-width: 185px;
      margin: 0 auto;
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 30px;
      line-height: 21px;
    }
    .plan-pointer {
      width: 100%;
      min-height: 40px;
      text-align: center;
      display: block;
    }
  }
  .single:nth-child(3) {
    margin-top: 100px;
  }
  .recommended {
    // height: 468px;
    background-color: #000000;
    border: 1px solid #fad096;
    color: #fff;
    h3 {
      color: #fff;
    }
    @media (max-width: 955px) {
      // margin-top: 3.5rem;
    }
  }
  .recommended-btn {
    height: 47px;
    width: 171px;
    background-color: #000;
    border: 1px solid #fad096;
    color: #fff;
    font-size: 14px;
    display: flex;
    font-weight: 500;
    align-items: center;
    justify-content: center;
    margin-top: -6rem;
    margin-bottom: 3rem;
    // margin-left: 2rem;
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    margin-right: auto;
    margin-left: auto;
  }

  .plan-btn {
    height: 46px;
    width: 164px;
    margin-top: 40px;
    background-color: transparent;
    color: #222;
    box-shadow: none;
    border: 1px solid #707070;
    font-size: 14px;
    position: relative;
    
    &:hover {
      :after {
        width: 100%;
        content: '';
        height: 3px;
        position: absolute;
        bottom: 5px;
        left: 0;
        background-color: #707070;
      }
    }
  }
  .plan-customBtn {
    height: 46px;
    width: 164px;
    margin-top: 70px;
    background-color: #000;
    color: #fff;
    box-shadow: none;
    border: 1px solid #707070;
    font-size: 14px;
    position: relative;
    &:hover {
      :after {
        width: 100%;
        content: '';
        height: 3px;
        position: absolute;
        bottom: 5px;
        left: 0;
        background-color:  #fff;
      }
    }
  }
  .recomand-plan {
    background: #33b864;
    color: #fff;
    margin-top: 40px;
    &:hover {
      :after {
        width: 100%;
        content: '';
        height: 3px;
        position: absolute;
        bottom: 5px;
        left: 0;
        background-color: #fff;
      }
    }
  }
  /* switch css  */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 28px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .spinner {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .spinner:before {
    position: absolute;
    content: '';
    height: 36px;
    width: 36px;
    left: -1px;
    bottom: -3px;
    box-shadow: var(--shadow-4);
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .spinner {
    background-color: #222;
  }

  input:focus + .spinner {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .spinner:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded spinners */
  .spinner.round {
    border-radius: 34px;
  }

  .spinner.round:before {
    border-radius: 50%;
  }
`;
const Mobile = styled.div`
  /* position: relative;
  display: block; */
  margin-top: 130px;
`;
export default PricingPlan;
