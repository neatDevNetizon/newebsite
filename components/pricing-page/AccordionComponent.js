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
          <span>{item.heading}</span>
          <span className='icon' onClick={() => setShow(!show)}>
            {show ? (
              <Image src={minus} alt='' />
            ) : (
              <Image src={plusIcon} alt='' />
            )}
          </span>
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
    font-size: ${props => props.bordering?"18px":"16px"};
  }
  .content {
    font-size: 14px;
    font-family: Spartan, sans-serif;
    line-height: 22px;
  }
`;
export default AccordionComponent;
