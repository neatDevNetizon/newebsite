import React, { useState } from 'react';
import styled from 'styled-components';
import { BiDotsVertical } from 'react-icons/bi';
import { BiDotsHorizontal } from 'react-icons/bi';
import Image from 'next/image';
import primary from './../images/primary.png';

const VirtualSettings = () => {
  const [view, setView] = useState(true);
  const [parcent, setParcent] = useState(true);
  return (
    <Wrapper>
      <Content>
        <div className='auto-rotate'>
          <text>Autorotate </text>
          <input type='range' id='rotate' name='rotate' min='0' max='10' />
        </div>
        <div className='view-mode hide-mobile'>
          <p>View Mode</p>
          <div
            className={!view ? 'icon black' : 'icon'}
            onClick={() => setView(false)}
          >
            <BiDotsVertical />
          </div>
          <div
            className={view ? 'icon black' : 'icon'}
            onClick={() => setView(true)}
          >
            <BiDotsHorizontal />
          </div>
        </div>
      </Content>

      <form action='' className='form hide-mobile'>
        <div className='input'>
          <input className='input' type='text' placeholder='Width' id='width' />
          <span htmlFor='width'>
            <Image src={primary} alt='' />
          </span>
        </div>

        <div className='input'>
          <input
            className='input'
            type='text'
            placeholder='Height'
            id='height'
          />
          <span htmlFor='height'>
            <Image src={primary} className='rotate' alt='' />
          </span>
        </div>
        <span>
          <div
            className={parcent ? 'icon black' : 'icon'}
            onClick={() => setParcent(true)}
          >
            %
          </div>
          <div
            className={!parcent ? 'icon black' : 'icon'}
            onClick={() => setParcent(false)}
          >
            px
          </div>
        </span>
      </form>
    </Wrapper>
  );
};

const Content = styled.div`
  display: grid;
  width: 100%;

  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
const Wrapper = styled.section`
  @media (max-width: 600px) {
    .hide-mobile {
      display: none !important;
    }
  }
  .auto-rotate {
    padding: 0 1rem;
    height: 80px;
    box-shadow: var(--shadow-1);
    border-radius: var(--borderRadius);
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    @media (max-width: 500px) {
      border-radius: 0;
    }
    text {
      font-weight: 600;
    }
    #rotate {
      width: 116px;
      background: #fff;
      color: #222;
      cursor: pointer;
    }
  }
  .view-mode {
    padding: 0 1rem;
    background-color: #fff;
    height: 80px;
    box-shadow: var(--shadow-1);
    border-radius: var(--borderRadius);
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    @media (max-width: 500px) {
      border-radius: 0;
    }

    p {
      font-weight: 600;
      margin: 0;
    }
  }
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
  .black {
    background-color: #262525 !important;
    color: #fff;
  }
  .form {
    margin-top: 1rem;
    margin-bottom: 0;

    max-width: 550px;
    box-shadow: var(--shadow-1);
    border-radius: var(--borderRadius);
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;

    @media (max-width: 550px) {
      width: 95vw;
      flex-wrap: wrap;
      border-radius: 0;
    }
    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .input {
      display: flex;
      align-items: center;
      justify-content: space-between;
      input {
        height: 36px;
        width: 156px;
        border: none;
        padding: 0 0 1rem 1rem;
        border-bottom: 2px solid #ddd;
        :focus {
          outline: none;
        }
        ::placeholder {
          letter-spacing: 2px;
        }
      }
      span {
        img {
          margin-left: -1.5rem;
        }
      }
      .rotate {
        transform: rotate(90deg);
      }
    }
  }
`;

export default VirtualSettings;
