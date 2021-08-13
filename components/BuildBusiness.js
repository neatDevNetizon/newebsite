import React from 'react';
import styled from 'styled-components';

const BuildBusiness = () => {
  return (
    <Wrapper>
      <div className='section'>
        <Header>
          <h3>Built For All Kinds Of Businesses</h3>
          <h5 className='title-desc'>
            Find the plan that suits your needs the best, we have customers ranging from solo entrepreneurs starting a virtual tour business to large corporations that want to showcase thousands of listings on their website. If you are not sure what plan is best for your use case
          </h5>
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
    margin: 0px 0px 8px;
    padding: 132px 0px 0px;
    font-size: 60px;
    line-height: 40.2px;
    font-weight: 800;
    font-family: Spartan, sans-serif;
    letter-spacing: 1px;
    color: rgb(245, 188, 99);
    @media(max-width: 600px){
      font-size:30px;
      padding: 62px 0px 0px;
    }
  }
  .title-desc {
    padding: 15px 0px 0px;
    margin: 0px 0px 20px;
    font-size: 24px;
    line-height: 40px;
    font-weight: 500;
    font-family: Spartan, sans-serif;
    letter-spacing: normal;
    color: rgb(158, 154, 154);
    text-align: start;
    max-width: 896px;
    @media(max-width: 600px){
      font-size:18px;
    }
  }
`;
const Wrapper = styled.div`
  padding: 42px 0px 48px;
  color: rgb(38, 37, 37);
  background-color: rgb(38, 37, 37);
  margin: 31px 0px 90px;
  font-size: 14px;
  line-height: 24.5px;
  font-weight: 400;
  letter-spacing: normal;
`;
const Body = styled.div`
  display: flex;
  padding: 0px;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin: 40px 0px 0px;
  font-size: 14px;
  line-height: 24.5px;
  font-weight: 400;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    justify-content: space-around;
  }
`;
const Item = styled.div`
  height: 500px;
  width: 95vw;
  font-size: 14px;
  line-height: 24.5px;
  letter-spacing: normal;
  padding: 0px;
  max-width: 342px;
  background-color: rgb(76, 75, 75);
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
