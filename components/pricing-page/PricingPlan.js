import React, { useState } from 'react';
import styled from 'styled-components';

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
    max-width: 332px;
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
    text-align: center;
    height: 428px;
    border-radius: 15px;
    box-shadow: var(--shadow-3);
    width: 276px;
    padding: 3rem 1rem;

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
    height: 468px;
    background-color: #000000;
    border: 1px solid #fad096;
    color: #fff;
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
