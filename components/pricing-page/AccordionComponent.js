import React, { useState } from 'react';
import plusIcon from './../../images/plus-icon.png';
import minus from './../../images/minus-icon.png';
import Image from 'next/image';
import styled from 'styled-components';
const AccordionComponent = ({ item }) => {
  const [show, setShow] = useState(false);
  return (
    <Wrapper bordering={show}>
      <div className='single'>
        <p className='heading'>
          <div>{item.heading}</div>
          <div className='icons' onClick={() => setShow(!show)}>
            {show ? (
              <Image src={minus} alt='' className='icon' />
            ) : (
              <Image src={plusIcon} alt='' className='icon' />
            )}
          </div>
        </p>
        {show && <p className='content'>{item.answer}</p>}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .single {
    border: ${props => props.bordering?"1px solid #E4E4EB":"none"};
  }
  .heading {
    font-weight: ${props => props.bordering?"bold":"normal"};;
    // font-size: ${props => props.bordering?"18px":"16px"};
    font-size: 18px;
  }
  .content {
    margin-top: 10px;
    font-size: 14px;
    font-family: Spartan, sans-serif;
    line-height: 22px;
    @media(max-width: 600px) {
      font-size: 11px;
    }
  }
  .icons {
    img {
      max-width: 28px;
      max-height: 28px;
      min-width: 28px;
      min-height: 28px;
      @media(min-width: 600px) {
        max-width: 32px;
        max-height: 32px;
        min-width: 32px;
        min-height: 32px;
      }
    }
  }
`;
export default AccordionComponent;
