import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../images/logo-footer.png';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import youtube from '../images/youtube.png';
import twitter from '../images/twitter.png';
import googleplay from '../images/googleplay.png';
import appstore from '../images/appstore.png';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  const [date, setDate] = useState(new Date().getFullYear());
  return (
    <Wrapper>
      <div className='footer-top section'>
        <FooterTop>
          <ColumnTop>
            <h4>Ready To Create Your  Virtual Tour ?</h4>
            <p className='font-20'>
            Start your We bring together everything that’s required to build websites and apps that accept payments and send payouts globally. Stripe’s products power payments for online and 
            </p>
            <button className='btn trial-btn'>Start Free Trial</button>
          </ColumnTop>
          <ColumnTop>
            <h4>Questions About Our Plans ?</h4>
            <p className='font-20'>
              We bring together everything that’s required to build websites and
              apps that accept payments and send payouts globally. Stripe’s
              products power payments for online and in-person retailers.
            </p>
            <button className='btn demo-btn'>Request demo</button>
          </ColumnTop>
        </FooterTop>
      </div>
      <hr />
      <div className='footer-middle section'>
        <div className='teliport'>
          <div className='heading hide-mobile'>
            <Image src={logo} alt='' />
            <h3>teliportme</h3>
          </div>
          <p className='body2 hide-mobile'>
            Create & Share 360 Photos And Virtual Tours
          </p>
          <div className='icon-container'>
            <Link href='/' passHref>
              <Image src={facebook} alt='' />
            </Link>
            <Link href='/' passHref>
              <Image src={instagram} alt='' />
            </Link>
            <Link href='/' passHref>
              <Image src={twitter} alt='' />
            </Link>
            <Link href='/' passHref>
              <Image src={youtube} alt='' />
            </Link>
          </div>
        </div>
        <div className='links'>
          <h4>Important Links</h4>
          <ul>
            <li>
              <Link href=''>RemixVR</Link>
            </li>
            <li>
              <Link href=''>P360 Android App</Link>
            </li>
            <li>
              <Link href=''>P360 iOS App</Link>
            </li>
            <li>
              <Link href=''>Knowledge Base</Link>
            </li>
            <li>
              <Link href=''>Roadmap</Link>
            </li>
          </ul>
        </div>
        <div className='contact'>
          <h4>Contact Us</h4>
          <ul>
            <li>814 Mission Street</li>
            <li>San Francisco, CA, 94103</li>
          </ul>
          <div className='btn-container'>
            <div className='google-play'>
              <Image src={googleplay} alt='' />
            </div>
            <div className='apple-store'>
              <Image src={appstore} alt='' />
            </div>
          </div>
        </div>
        
      </div>
      <hr className='hr2' />
      <div className='footer-bottom section'>
        <p>© {date} TeliportMe, Inc. All rights reserved.</p>
        <p>
          Made by{' '}
          <span>
            <Link href=''>Grid Stacks</Link>
          </span>
        </p>
        <div className='terms'>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.footer`
  background-color: #262525;
  @media (max-width: 600px) {
    .hide-mobile {
      display: none !important;
    }
  }
  .section {
    max-width: 1217px;
  }
  .footer-top {
    min-height: 600px;
    margin: 0 auto;
    display: flex;
    padding-top: 100px;
    justify-content: start;
    flex-direction: column;
    gap: 45px;
  }
  .btn {
    position: relative;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    margin-top: 1rem;
    transition: 0.3s ease;
    @media(max-width: 600px) {
      margin-top: 10px;
    }

    &:hover {
      clip-path: polygon(5% 0, 100% 0, 95% 100%, 0 100%);
      font-size: 14px;
      :after {
        width: 100%;
        content: '';
        height: 3px;
        position: absolute;
        bottom: 5px;
        left: 0;
        background-color: #222;
      }
    }
  }

  .trial-btn {
    background-color: #33b864;
    width: 262px;
    height: 56px;
  }
  .demo-btn {
    background-color: #fff;
    width: 262px;
    color: #262525;
    height: 56px;
    :hover {
      background-color: #33b864;
      color: #fff;
    }
  }

  hr {
    width: 80%;
    margin: 0 auto;
    height: 1px;
    background-color: #e4e4eb;
    color: #e4e4eb;
    opacity: 0.4;
  }
  .footer-middle {
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: center;
    justify-content: space-between;
    margin-top: 55px;
    margin-bottom: 35px;
    @media (max-width: 600px) {
      padding-left: 1.2rem;
    }
    .heading {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      img {
        height: 52px;
        width: 52px;
      }
      h3 {
        text-transform: uppercase;
        color: #fff;
        margin: 0;
        font-size: 24px;
      }
    }
    p {
      margin: 35px 0;
      margin-left: 0.6rem;
    }
    .icon-container {
      display: flex;
      align-items: center;
      gap: 2.5rem;

      margin-left: 0.6rem;
    }
    .links {
      /* @media (max-width: 600px) {
        text-align: center;
      } */
      h4 {
        color: #fff;
        font-size: 24px;
      }
      ul li {
        margin-bottom: 0.6rem;
      }

      ul li a {
        color: #fff;

        font-size: 12px;
      }
    }
    .contact {
      @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        /* justify-content: space-around; */
        /* align-items: center; */
      }
      h4 {
        color: #fff;
        font-size: 24px;
      }

      ul li {
        color: #fff;
        margin-bottom: 0.8rem;
        font-size: 12px;
      }
      .btn-container {
        margin: 70px 0 0 -10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        @media (max-width: 500px) {
          margin-top: 10px;
        }
        img {
          cursor: pointer;
        }
      }
    }
  }
  .hr2 {
    width: 100%;
    opacity: 0.3;
  }

  .footer-bottom {
    min-height: 90px;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #fff;
    padding: 1rem;
    p {
      font-size: 12px;
      margin: 0;
      span a {
        color: #14d89c;
      }
    }
    .terms {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
`;
const FooterTop = styled.div`
  display: flex;
  gap: 2rem 1rem;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    justify-content: space-around;
    padding: 1.5rem;
  }
`;
const ColumnTop = styled.div`
  max-width: 385px;
  h4 {
    color: #f5bc63;
    font-size: 18px;
    @media (max-width: 600px) {
      margin-bottom: 10px;
    }
  }
  .font-20 {
    font-size: 14px;
    color: #fff;
    @media (max-width: 1000px) {
      font-size: 14px;
    }
  }
`;
export default Footer;
