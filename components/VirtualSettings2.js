import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Image1 from './../images/Image1.png';
import UploadImage from './../images/upload.png';
import DotTop2 from './../images/dot-top2.png';
import DotTop1 from './../images/dot-top1.png';
import DotBottom2 from './../images/dot-bottom2.png';
import DotBottom1 from './../images/dot-bottom1.png';
import VirtualSettings from './VirtualSettings';

const VirtualSettings2 = () => {
  const [logoPosition, setLogoPosition] = useState({
    top1: true,
    top2: false,
    bottom1: false,
    bottom2: false,
  });
  return (
    <Wrapper>
      <div className='section'>
        <Header>
          <h3>Powerful Embed To Share Anywhere</h3>
          <p className='title-desc'>
            More than 100,000 business’s use our embed functionality on their
            websites. Our embed is supported on Wordpress, Jumla, Wix,
            Squarespace
          </p>
        </Header>
        <div className='container '>
          <div className='img-container'>
            <Image src={Image1} alt='Image 1' />
          </div>
          <div className='content'>
            <VirtualSettings />
            <div className='upper'>
              <div className='upper-top'>
                <div className='show-logo'>
                  <label className='switch'>
                    <input type='checkbox' />
                    <span className='slider round'></span>
                  </label>
                  <p>Show Logo</p>
                </div>
                <div className='upload-btn-wrapper hide-mobile'>
                  <label htmlFor='file'>
                    <Image src={UploadImage} alt='Upload' />
                    <span>Upload Custom Logo</span>
                  </label>
                  <input type='file' name='myfile' id='file' />
                </div>
              </div>
              <div className='upper-middle'>
                <p>Logo Position</p>
                <button
                  className={
                    logoPosition.top1 ? 'icon-btn icon active' : 'icon-btn icon'
                  }
                  onClick={() => setLogoPosition({ top1: true })}
                >
                  <div className='dot-img'>
                    <Image src={DotTop2} alt='' />
                  </div>
                </button>
                <button
                  className={
                    logoPosition.top2 ? 'icon-btn icon active' : 'icon-btn icon'
                  }
                  onClick={() => setLogoPosition({ top2: true })}
                >
                  <Image src={DotTop1} alt='' />
                </button>
                <button
                  className={
                    logoPosition.bottom1
                      ? 'icon-btn icon active'
                      : 'icon-btn icon'
                  }
                  onClick={() => setLogoPosition({ bottom1: true })}
                >
                  <Image src={DotBottom1} alt='' />
                </button>
                <button
                  // className="icon-btn icon"
                  className={
                    logoPosition.bottom2
                      ? 'icon-btn icon active'
                      : 'icon-btn icon'
                  }
                  onClick={() => setLogoPosition({ bottom2: true })}
                >
                  <Image src={DotBottom2} alt='' />
                </button>
              </div>
              <div className='upper-bottom hide-mobile'>
                <article>
                  <text>Logo Size </text>
                  <input
                    type='range'
                    id='rotate'
                    name='rotate'
                    min='0'
                    max='10'
                  />
                </article>
                <article>
                  <text> Transparency</text>
                  <input
                    type='range'
                    id='rotate'
                    name='rotate'
                    min='0'
                    max='10'
                  />
                </article>
              </div>
            </div>

            {/* =============== */}

            <div className='middle'>
              <div className='pano'>
                <label className='switch'>
                  <input type='checkbox' />
                  <span className='slider round'></span>
                </label>
                <p>Pano Details</p>
              </div>
              <div className='pano fullscreen'>
                <label className='switch'>
                  <input type='checkbox' />
                  <span className='slider round'></span>
                </label>
                <p>Fullscreen Button</p>
              </div>
            </div>

            {/* ============== */}

            <div className='btn-container'>
              <button className='btn trial-btn'>Copy to Embed Code</button>
              <button className='btn demo-btn'>Start Free Trial</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Header = styled.div`
  color: #fff;
  h3 {
    margin-bottom: 8px;
    font-size: 60px;
    line-height: 44.2px;
    font-weight: 600;
    font-family: Spartan, sans-serif;
    letter-spacing: -3px;
    color: #111827;
    text-align: start;
    @media (max-width: 600px) {
      padding: 50px 0px 0px;
      margin: 7px 39px 8px 0px;
      font-size: 30px;
      line-height: 39px;
      font-weight: 800;
      letter-spacing: 1px;
      font-family: Spartan, sans-serif;
      color: rgb(17, 24, 39);
      text-align: start;
    }
  }
  .title-desc {
    max-width: 1050px;
    padding: 0px;
    margin: 20px 0px 40px;
    font-size: 24px;
    line-height: 35px;
    font-weight: 300;
    font-family: Spartan, sans-serif;
    letter-spacing: normal;
    color: #6B7280;
    font-weight: 600;
    @media (max-width: 600px) {
      font-size: 18px;
      margin: -1px 0px 20px 0px;
      padding: 24px 0px 10px;
      line-height: 28px;
    }
  }
`;
const Wrapper = styled.div`
  @media (max-width: 600px) {
    .hide-mobile {
      display: none !important;
    }
  }
  background-color: #EFEFEF;
  padding: 80px 0px;
  margin: 160px 0px 0px;
  font-size: 14px;
  .icon {
    height: 42px;
    width: 42px;
    background-color: #e4e4eb;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    svg {
      font-size: 35px;
    }
  }
  .container {
    overflow: hidden;
    display: grid;
    gap: 1.5rem;
    justify-items: center;
    align-items: center;
    @media (min-width: 1100px) {
      grid-template-columns: 1fr 1fr;
    }
    .img-container {
      img {
        width: 100% !important;
      }
    }
    .content {
      width: 100%;
      max-width: 550px;
      .upper {
        @media (min-width: 600px) {
          min-height: 200px;
        }
        background-color: #fff;
        margin-top: 1rem;

        box-shadow: var(--shadow-2);
        border-radius: 10px;
        padding: 1rem;
        @media (max-width: 500px) {
          border-radius: 0;
        }
      }
    }

    .upper-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      @media (max-width: 600px) {
        flex-direction: column;
      }
      .show-logo {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        p {
          margin: 0;
        }
      }
      .upload-btn-wrapper {
        label {
          display: flex;
          align-items: center;
          cursor: pointer;
          gap: 1rem;
        }
        input {
          display: none;
        }
      }
    }
    .upper-middle {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
      margin: 30px 0;
      @media (max-width: 600px) {
        margin: 10px 0;
        margin-top: 20px;
      }
      .active {
        background-color: #707070;
      }
      .icon {
        @media (max-width: 450px) {
          height: 30px;
          width: 30px;
        }
      }

      img {
        @media (max-width: 450px) {
          height: 15px;
          width: 15px;
        }
      }

      p {
        margin: 0;
        @media (max-width: 450px) {
          font-size: 14px;
        }
      }
    }
    .upper-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      @media (max-width: 600px) {
        flex-direction: column;
      }
      article {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }

    .middle {
      display: grid;
      align-items: center;
      margin-top: 1rem;

      gap: 1rem;
      grid-template-columns: 1fr 1fr;
      @media (max-width: 650px) {
        grid-template-columns: 1fr;
      }
      .pano {
        background-color: #fff;
        height: 76px;

        box-shadow: var(--shadow-2);
        border-radius: 10px;
        display: flex;
        align-items: center;
        padding: 0 1rem;
        gap: 1.5rem;
        justify-content: center;
        @media (max-width: 500px) {
          border-radius: 0;
        }
        p {
          font-weight: 600;
          margin: 0;
        }
      }
      .fullscreen {
        height: 76px;
        box-shadow: var(--shadow-2);
        border-radius: 10px;
        @media (max-width: 500px) {
          border-radius: 0;
        }
      }
    }
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
  }

  .btn-container {
    margin-top: 1rem;
    display: flex;
    gap: 2rem;
    @media (max-width: 800px) {
      justify-content: center;
    }
    align-items: center;
    flex-wrap: wrap;
    .btn {
      letter-spacing: 1;
      font-size: 14px;
    }
    .trial-btn {
      background-color: #fff;
      width: 274px;
      height: 46px;
      color: #222;
      @media (max-width: 600px) {
        width: 100%;
      }
    }
    .demo-btn {
      background-color: #33b864;

      width: 239px;
      height: 46px;
      @media (max-width: 600px) {
        width: 100%;
      }
    }
  }
`;
export default VirtualSettings2;
