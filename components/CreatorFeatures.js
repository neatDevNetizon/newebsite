import React from 'react';
import styled from 'styled-components';
import demoIcon from './../images/edit-icon.png';
import privateIcon from '../images/private-icon.png';
import brandIcon from './../images/brand-icon.png';
import supportIcon from './../images/support-icon.png';
import trainingIcon from './../images/training-icon.png';
import uploadIcon from './../images/upload-icon.png';
import Image from 'next/image';
const CreatorFeatures = () => {
  return (
    <Wrapper className='section'>
      <h3>Virtual Tour Creator Features</h3>
      <p>
        Putting 360° virtual tour creation in the hands of every agent and
        business. Your toolbox for simple yet powerful virtual tours.
      </p>
      <div className='container mt'>
        <div className='single'>
          <Image src={demoIcon} alt='' />
          <p className='body1'>Custom hotspot icons</p>
          <p className='body2'>
            Add images, audio, videos and fully customize the look and feel of
            your tours.
          </p>
        </div>
        <div className='single'>
          <Image src={privateIcon} alt='' />
          <p className='body1'>Unlisted & Private Tours</p>
          <p className='body2'>
            Post unlisted or private tours and share them only with clients,
            co-workers or people you choose.
          </p>
        </div>
        <div className='single'>
          <Image src={brandIcon} alt='' />
          <p className='body1'>Your Branding</p>
          <p className='body2'>
            Use our world class editor to easily share or embed tours and with
            your logo on them.
          </p>
        </div>
      </div>
      <div className='container'>
        <div className='single'>
          <Image src={supportIcon} alt='' />
          <p className='body1'>Premium Support</p>
          <p className='body2'>
            We can help you if you have any issues anytime and answer within
            24hours through email & phone.
          </p>
        </div>
        <div className='single'>
          <Image src={uploadIcon} alt='' />
          <p className='body1'>Unlimited Uploads</p>
          <p className='body2'>
            No limitation on the amount or size of files of your virtual tour,
            nor do we cap on data transfer..
          </p>
        </div>
        <div className='single'>
          <Image src={trainingIcon} alt='' />
          <p className='body1'>Free Training Webinar</p>
          <p className='body2'>
            you can access to 3 indepth training webinars to be perfect on
            photography and virtual tours
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  text-align: center;
  margin-top: 100px;
  margin-bottom: 125px;
  @media (max-width: 600px) {
    margin-bottom: 60px;
  }
  p {
    max-width: 670px;
    margin: auto;
  }
  .mt {
    padding-top: 20px;
  }
  .container {
    margin-top: 60px;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
    @media (max-width: 900px) {
      justify-content: space-around;
    }
  }
  .single {
    max-width: 232px;

    .body1 {
      font-weight: 600;
      margin: 10px 0;
    }
  }
`;

export default CreatorFeatures;
