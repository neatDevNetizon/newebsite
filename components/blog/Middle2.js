import React from 'react';
import styled from 'styled-components';
import middle2 from './../../images/middle2.png';
import li from './../../images/li.png';
import Image from 'next/image';
const Middle2 = () => {
  return (
    <Wrapper className='section'>
      <div className='container'>
        <div className='content'>
          <h3>Subtitle 2 </h3>
          <p className='body2'>
            This is mostly a much larger explanation of why teliportme or
            virtual tours can be used in this specific case This is mostly a
            much larger explanation of why teliportme or virtual tours can be
            used in this specific case. This is mostly a much larger explanation
            of why teliportme or virtual tours can be used in this specific case
          </p>
        </div>
        <div className='image'>
          <Image src={middle2} alt='' />
        </div>
      </div>
      <div className='bottom'>
        <ul>
          <li>
            <Image src={li} alt='' />{' '}
            <span>Feature 1 that makes it useful</span>
          </li>
          <li>
            {' '}
            <Image src={li} alt='' />{' '}
            <span>gravida in erat nec, tempor rutrum purus.</span>
          </li>
          <li>
            <Image src={li} alt='' />{' '}
            <span>
              {' '}
              Ut scelerisque pellentesque tortor vitae consectetur. Cras in
              velit ex.
            </span>
          </li>
        </ul>
        <ul>
          <li>
            <Image src={li} alt='' />{' '}
            <span>vel velit porttitor, nec ornare dui suscipit.</span>
          </li>
          <li>
            <Image src={li} alt='' /> <span>Suspendisse eget posuere ex.</span>
          </li>
          <li>
            <Image src={li} width={20} height={20} alt='' />{' '}
            <span>
              Donec sodales bibendum augue, sed maximus sem iaculis eu. Aenean
              erat sem, congue eget suscipit consequat, sollicitudin eu leo.
            </span>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-bottom: 190px;
  position: relative;
  @media (max-width: 999px) {
    margin-bottom: 30px;
  }
  .container {
    min-height: 470px;
    display: grid;
    gap: 2rem;
    @media (min-width: 1000px) {
      grid-template-columns: 1fr 1fr;
      justify-items: stretch;
      width: 100%;
    }
  }
  .image {
    justify-self: end;
    @media (max-width: 999px) {
      justify-self: center;
    }
    img {
      max-width: 100%;
    }
  }
  .content {
    margin-top: 3rem;
    max-width: 455px;
    @media (max-width: 999px) {
      justify-self: center;
    }
    h3 {
      line-height: 55px;
      @media (max-width: 999px) {
        line-height: 35px;
      }
    }
    p {
      font-size: 16px;
      margin-right: 1.5rem;
    }
  }
  .bottom {
    width: 90vw;
    max-width: 1089px;
    border-radius: 10px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    min-height: 238px;
    background-color: #fff;
    box-shadow: var(--shadow-2);
    padding: 1.5rem 2.5rem;
    gap: 0 2rem;
    @media (min-width: 1000px) {
      position: absolute;
      bottom: -10%;
      left: 0;
    }
    ul {
      flex: 1;
      max-width: 428px;
      min-width: 220px;

      li {
        margin-bottom: 25px;
        display: flex;
        gap: 1rem;
        align-items: flex-start;
        font-weight: 700;
        :last-child {
          margin-bottom: 0;
        }
        span {
          font-size: 14px;
          font-weight: 500;
        }
        img {
          padding-top: 5px !important;
        }
      }
    }
  }
`;

export default Middle2;
