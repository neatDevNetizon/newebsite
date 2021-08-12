import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { GoThreeBars } from 'react-icons/go';
import { GrFormClose } from 'react-icons/gr';
import logo from './../images/logo.png';
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <Wrapper>
      <div className='wrapper'>
        <nav>
          <div className='logo'>
            <Link href='/' passHref>
              <Image src={logo} alt='' />
            </Link>
          </div>
          <div className='nav-links'>
            <ul>
              <li>
                <Link href='/'>Industries</Link>
              </li>
              <li>
                <Link href='/'>Features</Link>
              </li>
              <li>
                <Link href='/'>Resources</Link>
              </li>
              <li>
                <Link href='/Pricing'>Pricing</Link>
              </li>
              <li>
                <Link href='/about-us'>About Us</Link>
              </li>
              <li>
                <Link href='/Blog'>Blog</Link>
              </li>
            </ul>
          </div>
          <div className='button'>
            <Link href='/sign-in' passHref>
              <button className='btn signin-btn'>Sign In</button>
            </Link>
            <button className='btn demo-btn'>Request demo</button>
          </div>
        </nav>
      </div>

      <MobileNav>
        <div className='mobile-wrapper'>
          <div className='heading'>
            <Link href='/' passHref>
              <div className='logo'>
                <Image src={logo} alt='' />
              </div>
            </Link>

            <button className='btn bar' onClick={() => setShow(true)}>
              <GoThreeBars />
            </button>
          </div>
          {show && (
            <div className='mobile-links'>
              <ul>
                <li onClick={() => setShow(false)}>
                  <Link href='/'>Industries</Link>
                </li>
                <li onClick={() => setShow(false)}>
                  <Link href='/'>Features</Link>
                </li>
                <li onClick={() => setShow(false)}>
                  <Link href='/'>Resources</Link>
                </li>
                <li onClick={() => setShow(false)}>
                  <Link href='/Pricing'>Pricing</Link>
                </li>
                <li onClick={() => setShow(false)}>
                  <Link href='/about-us'>About Us</Link>
                </li>
                <li onClick={() => setShow(false)}>
                  <Link href='/Blog'>Blog</Link>
                </li>
                <li>
                  <Link href='/sign-in' passHref>
                    <button
                      className='btn signin-btn'
                      onClick={() => setShow(false)}
                    >
                      Sign In
                    </button>
                  </Link>
                </li>
                <li>
                  <button className='btn demo-btn'>Request demo</button>
                </li>
              </ul>
              <div className='close'>
                <GrFormClose onClick={() => setShow(false)} />
              </div>
            </div>
          )}
        </div>
      </MobileNav>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  .wrapper {
    @media (max-width: 800px) {
      display: none;
    }
  }
  nav {
    padding-top: 1.5rem;
    padding-bottom: 2rem;
    width: 95vw;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      z-index: 9;
      cursor: pointer;
      img {
      }
    }
    ul {
      z-index: 9;
      display: flex;
      align-items: center;
      gap: 2rem;

      li {
        z-index: 9;
        a {
          z-index: 9;
          color: #262525;
          font-weight: 600;
          font-size: 14px;
          transition: 0.3s;
          position: relative;
          :hover {
            color: #a5a5bd;

            &::before {
              content: '';
              height: 3px;
              width: 30px;
              position: absolute;
              bottom: -6px;
              left: 0;
              background-color: #a5a5bd;
              border-radius: 5px;
            }
          }
        }
      }
    }
  }

  .button {
    z-index: 9;

    .signin-btn {
      background-color: #fff;
      margin-right: 1rem;
      height: 46px;
      width: 116px;
      cursor: pointer;
      color: #000;
    }
    .demo-btn {
      position: relative;
      width: 180px;
      height: 46px;
      color: #fff;
      background-color: #000;
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
      transition: 0.3s ease;
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
          background-color: #fff;
        }
      }
      @media (max-width: 600px) {
        width: 160px;
        height: 46px;
      }
    }
  }
`;
const MobileNav = styled.nav`
  .mobile-wrapper {
    display: none;
    @media (max-width: 799px) {
      display: block;
    }
  }
  .heading {
    width: 90vw;
    position: relative;
    z-index: 99999;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    .logo {
      height: 40px;
      width: 40px;
      margin-left: 0.5rem;
    }

    .bar {
      background-color: transparent;
      box-shadow: none;
      color: #222;
      font-size: 35px;
      clip-path: none;
    }
  }
  .signin-btn {
    background-color: #fff;
    margin-right: 1rem;
    height: 46px;
    width: 116px;
    cursor: pointer;
    color: #000;
  }
  .demo-btn {
    background-color: #fff;
    width: 180px;
    height: 46px;
    color: #222;
    background-color: #fff;
    @media (max-width: 600px) {
      width: 160px;
      height: 46px;
    }
  }
  .close {
    position: absolute;
    top: 5%;
    right: 5%;
    z-index: 99999999;
    svg {
      background-color: #fff;
      font-size: 30px;
    }
  }
  .mobile-links {
    overflow: hidden;
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: #222;
    z-index: 99999999999;
    color: #fff;
    top: 0;
    left: 0;
    display: flex;
    /* visibility: hidden;
    opacity: 0; */
    align-items: center;
    justify-content: center;
    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      li a {
        color: #fff;
      }
    }
  }
`;
export default Navbar;
