import React, { useState } from 'react';
import styled from 'styled-components';
import checked from '../../images/check.png';
import Image from 'next/image';

import PricingPlanCarousel from './PricingPlanCarousel';
const PricingPlan = () => {
  const [yearly, setYearly] = useState(false);
  return (
    <>
      <Wrapper className='section'>
        <div className='header'>
          <p className='body2'>
            Monthly billing <br />
            <span>no contract</span>
          </p>
          <label className='switch'>
            <input
              type='checkbox'
              onChange={(e) => setYearly(e.target.checked)}
            />
            <span className='slider round'></span>
          </label>
          <div className='annual'>
            <p>
              Annual billing <br /> <span>20% </span>Off
            </p>
          </div>
        </div>
        <div className='container hide-mobile'>
          <div className='single'>
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

          <div className='single'>
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

          <div className='single recommended'>
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

          <div className='single'>
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
        </div>
      </Wrapper>
      {/* <PricingPlanCarousel yearly={yearly} /> */}
    </>
  );
};
const Wrapper = styled.section`
  margin-bottom: 100px;
  /* @media (min-width: 601px) {
    .hide-desktop {
      display: none !important;
    }
  } */
  /* @media (max-width: 600px) {
    .hide-mobile {
      display: none !important;
    }
  } */
  .header {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 406px;
    background-color: rgba(255, 185, 80, 0.12);
    padding: 20px 40px 20px 40px;
  }
  .body2 {
    margin: 0;
    span {
      padding-left: 1rem;
    }
  }
  .annual {
    p {
      font-weight: 600;
      margin: 0;
      font-size: 14px;
      span {
        color: #05cf83;
      }
    }
  }

  .container {
    margin-top: 130px;
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
    height: 471px;
    text-align: center;
    border-radius: 15px;
    box-shadow: var(--shadow-3);
    width: 276px;
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
      margin: 5px 0px;
      label {
        margin-left: 5px;
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
  }
  .plan-customBtn {
    height: 46px;
    width: 164px;
    margin-top: 50px;
    background-color: #000;
    color: #fff;
    box-shadow: none;
    border: 1px solid #707070;
    font-size: 14px;
    // position: absolute;
  }
  .recomand-plan {
    background: #33b864;
    color: #fff;
    margin-top: 40px;
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

  .slider {
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

  .slider:before {
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

  input:checked + .slider {
    background-color: #222;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
const Mobile = styled.div`
  /* position: relative;
  display: block; */
  margin-top: 130px;
`;
export default PricingPlan;
