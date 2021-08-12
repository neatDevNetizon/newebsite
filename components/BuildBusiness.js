import React from 'react';
import styled from 'styled-components';

const BuildBusiness = () => {
  return (
    <Wrapper>
      <div className='section'>
        <Header>
          <h3>Built For All Kinds Of Businesses</h3>
          <p className='title-desc'>
            Find the plan that suits your needs the best, we have customers
            ranging from solo entrepreneurs starting a virtual tour business to
            large corporations that want to showcase thousands of listings on
            their website. If you are not sure what plan is best for your use
            case - contact us via email.
          </p>
        </Header>
        <Body>
          <Item>
            <article>
              <div className='text'>
                <span>solo</span>
              </div>
              <div className='desc'>
                One Virtual Tour for life. Starting as low as $50 one time.
              </div>
            </article>
          </Item>
          <Item>
            <article>
              <div className='text'>
                <span>Agencies</span>
              </div>
              <div className='desc'>
                affordable & scalable solution for virtual tour agencies and
                realtors this will change your life for real
              </div>
            </article>
          </Item>
          <Item>
            <article>
              <div className='text'>
                <span>Corporations</span>
              </div>
              <div className='desc'>
                Prefect for Property Listing Sites & Retailers
              </div>
            </article>
          </Item>
        </Body>
      </div>
    </Wrapper>
  );
};
const Header = styled.div`
  color: #fff;
  h3 {
    margin-bottom: 8px;
    color: #f5bc63;
  }
  .title-desc {
    font-weight: 300;
    letter-spacing: -1px;
    @media (min-width: 800px) {
      font-size: 20px;
    }
  }
`;
const Wrapper = styled.div`
  padding: 3rem 0;
  background: #262525;
  margin-bottom: 100px;
`;
const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    justify-content: space-around;
  }
`;
const Item = styled.div`
  height: 500px;
  width: 95vw;

  max-width: 342px;
  background: #4c4b4b;
  display: flex;
  align-items: flex-end;
  transition: 0.3s ease;
  &:hover {
    background: #707070;
  }
  .text {
    height: 67px;
    width: 182px;
    background: #262525;
    color: #fff;
    font-size: 20px;
    display: flex;
    align-items: center;
    padding: 1rem;
    text-transform: capitalize;
  }
  .desc {
    width: 100%;
    height: 105px;
    background: #3a3939;
    color: #fff;
    font-size: 13px;
    display: flex;
    align-items: center;
    padding: 1rem;
    font-weight: 400;
  }
`;
export default BuildBusiness;
