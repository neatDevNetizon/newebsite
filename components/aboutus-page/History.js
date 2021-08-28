import React from 'react';
import styled from 'styled-components';
import history from './../../images/history.png';
import Image from 'next/image';
const History = () => {
  return (
    <Wrapper className='section'>
      <div className='content'>
        <p>
          Early 2015, we launched a small project Pluto (available only on iOS)
          built for creators who are tired with standard filters to augment
          photos and wanted to create views of the world using abstract ideas,
          image distortions, colors and perspectives to make it their own
          personal art. Pluto is a unique space we believe that creators need to
          let their creativity out and slowly this community has grown into
          something that has captured the imagination of this very niche set of
          users and will become the go to place to find abstract art.
        </p>
        <p>
          Currently we are focused on fostering the vibrant community of
          explorers we have by building additional tools to improve how they can
          share and interact with each other more meaningfully.
        </p>
      </div>
      <div className='image'>
        <Image src={history} alt='' />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: grid;
  gap: 2rem;
  margin-bottom: 130px;
  align-items: center;
  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  .content {
    // max-width: 414px;
    color: #6b7280;
    background-color: #fff;
    box-shadow: var(--shadow-2);
    border-radius: 10px;
    width: 95%;
    padding: 2.5rem;
    z-index: 9999;
    @media (max-width: 1100px) {
        width: 100%;
    }
  }
  .image {
    display: flex;
    justify-content: center;
    img {
      max-width: 100%;
    }
  }
`;
export default History;
