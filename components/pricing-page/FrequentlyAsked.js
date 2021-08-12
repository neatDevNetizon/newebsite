import React from 'react';
import styled from 'styled-components';

import AccordionComponent from './AccordionComponent';
const data = [
  {
    heading: 'How do I pay for the Essentials or Premium plan?',
    answer:
      'You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.',
  },
  {
    heading:
      'Can I cancel my Essentials or Premium plan subscription at any time?',
    answer:
      'You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.',
  },
  {
    heading:
      'My team wants to cancel its subscription. How do we do that? Can we get a refund?',
    answer:
      'You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.',
  },
  {
    heading:
      'Do you offer discounts for non-profit organizations or educational institutions?',
    answer:
      'You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.',
  },
  {
    heading: 'We need to add new users to our team. How will that be billed?',
    answer:
      'You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.',
  },
];
const FrequentlyAsked = () => {
  return (
    <Wrapper>
      <h3>Frequently Asked Questions</h3>
      <Accordion>
        {data.map((item, index) => {
          return <AccordionComponent item={item} key={index} />;
        })}
      </Accordion>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 100px auto;

  width: 90vw;
  h3 {
    text-align: center;
    margin-bottom: 40px;
    @media (max-width: 600px) {
      text-align: left;
    }
  }
`;
const Accordion = styled.div`
  max-width: 960px;
  margin: 0 auto;
  .single {
    box-shadow: var(--shadow-2);
    width: 100%;
    padding: 1.5rem;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  .icon {
    cursor: pointer;
    /* padding-bottom: 1rem; */
  }
  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    gap: 1rem;
  }
  .content {
    transition: 0.3s;
  }
`;
export default FrequentlyAsked;
