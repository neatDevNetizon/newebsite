import React, {useEffect} from 'react';
import styled from 'styled-components';
import check from './../../images/check.png';
import uncheck from './../../images/uncheck1.png';
import uncheck2 from './../../images/uncheck.png';
import additional from '../../images/addtional.png';
import Image from 'next/image';
const PricingWrapper = () => {
  useEffect(() => {
    const borderedTh = document.querySelector('table tr th:nth-child(4)');
    borderedTh.style.border = "3px solid #f5bc63";
    borderedTh.style.borderBottom = 'none';
    borderedTh.style.borderTopRightRadius = '5px';
    borderedTh.style.borderTopLeftRadius = '5px';
    const borderedLastTd = document.querySelector('table tr:last-child td:nth-child(4)');
    borderedLastTd.style.borderBottom = "3px solid #f5bc63";
    const borderedTds = document.querySelectorAll('table tr td:nth-child(4)');
    borderedTds.forEach((e)=>{
      e.style.borderRight = "3px solid #f5bc63";
      e.style.borderLeft = "3px solid #f5bc63";
    });
    
  },[])
  return (
    <Wrapper>
      <h3 className='heading'>Take A Look On Plans Comparison</h3>

      <table>
        <colgroup>
          <col style={{ backgroundColor: 'transparent' }} />
          <col
            style={{
              backgroundColor: 'rgba(228,228,235,.3)',
              borderRadius: '20px!important',
            }}
          />
          <col
            style={{
              backgroundColor: 'rgba(228,228,235,.3)',
              borderRadius: '20px!important',
            }}
          />
          <col
            style={{
              backgroundColor: '#000000',
              borderRadius: '20px!important',
              border: '1px solid #222',
              color: '#fff!important',
            }}
          />
          <col
            style={{
              backgroundColor: 'rgba(228,228,235,.3)',
              borderRadius: '20px!important',
            }}
          />
        </colgroup>
        <tr>
          <th className='th1'>
            <div className='plan'>
              <h3>Plans</h3>
            </div>
            <div className='additional'>
              <Image src={additional} alt='' />
            </div>
          </th>
          <th>
            <div>
              <p>Community</p>
              <h3>Free</h3>
            </div>
          </th>
          <th>
            <div>
              <p>Essential</p>
              <h3>
                $250
                <small>/ y</small>
              </h3>
            </div>
          </th>
          <th>
            <div>
              <div className='recommended'>Recommended</div>
              <p className='white'>Business</p>
              <h3 className='white'>
                $350
                <small>/ y</small>
              </h3>
            </div>
          </th>
          <th>
            <div>
              <p>Enterprise</p>
              <h3>Custom</h3>
            </div>
          </th>
        </tr>

        <tr>
          <td className='left'>Maximum Panorama Size</td>
          <td>20mb</td>
          <td>30mb</td>
          <td className='white'>50mb</td>
          <td>100mb</td>
        </tr>
        <tr>
          <td className='left'>iOS and Android app</td>
          <td>Free version</td>
          <td>PRO versions</td>
          <td className='white'>PRO versions</td>
          <td>PRO versions</td>
        </tr>
        <tr>
          <td className='left'>Embed Functionality</td>
          <td>Unlimited</td>
          <td>Unlimited</td>
          <td className='white'>Unlimited</td>
          <td>Unlimited</td>
        </tr>
        <tr>
          <td className='left'>360 Camera Integration</td>
          <td>
            <Image src={check} alt='' />
          </td>
          <td>
            <Image src={check} alt='' />
          </td>
          <td>
            <Image src={check} alt='' />
          </td>
          <td>
            <Image src={check} alt='' />
          </td>
        </tr>
        <tr>
          <td className='left'>Video Resolution</td>
          <td>4K</td>
          <td>8K</td>
          <td className='white'>16K</td>
          <td>Upto 32K</td>
        </tr>
        <tr>
          <td className='left'>Custom Branding</td>
          <td>
            <Image src={uncheck} alt='' />
          </td>
          <td>1 Brand</td>
          <td className='white'>15 Brands</td>
          <td>50 Brands</td>
        </tr>
        <tr>
          <td className='left'>Live Tours / Collections</td>
          <td>
            <Image src={uncheck} alt='' />
          </td>
          <td>25</td>
          <td className='white'>50</td>
          <td>Unlimited</td>
        </tr>

        <tr>
          <td className='left'>Private and unlisted</td>
          <td>
            <Image src={uncheck} alt='' />
          </td>
          <td>
            <Image src={check} alt='' />
          </td>
          <td>
            <Image src={check} alt='' />
          </td>
          <td>
            <Image src={check} alt='' />
          </td>
        </tr>
        <tr>
          <td className='left'>Number of Users</td>
          <td>
            <Image src={uncheck} alt='' />
          </td>
          <td>
            <Image src={uncheck2} alt='' />
          </td>
          <td className='white'>3 Users</td>
          <td>5 Users</td>
        </tr>

        <tr>
          <td className='left'>Basic API integration</td>
          <td>
            <Image src={uncheck} alt='' />
          </td>
          <td>
            <Image src={uncheck2} alt='' />
          </td>
          <td>
            <Image src={uncheck2} alt='' />
          </td>
          <td>
            <Image src={check} alt='' />
          </td>
        </tr>
        <tr>
          <td className='left'>Custom domain with SSL</td>
          <td>
            <Image src={uncheck} alt='' />
          </td>
          <td>
            <Image src={uncheck2} alt='' />
          </td>
          <td>
            <Image src={uncheck2} alt='' />
          </td>
          <td>
            <Image src={check} alt='' />
          </td>
        </tr>
        <tr>
          <td className='left'>Detailed Analytics</td>
          <td>
            <Image src={uncheck} alt='' />
          </td>
          <td>
            <Image src={uncheck2} alt='' />
          </td>
          <td>
            <Image src={uncheck2} alt='' />
          </td>
          <td>
            <Image src={check} alt='' />
          </td>
        </tr>
        <tr>
          <td className='left'></td>
          <td>
            <button className='btn plan-btn'>Select Plan</button>
          </td>
          <td>
            <button className='btn plan-btn'>Select Plan</button>
          </td>
          <td>
            <button className='btn plan-btn recomand-plan'>Select Plan</button>
          </td>
          <td>
            <button className='btn plan-btn black-btn'>Contact Us</button>
          </td>
        </tr>
      </table>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  margin-bottom: 150px;
  max-width: 1251px;
  /* min-width: 1000px; */
  padding: 0 2rem;

  @media (max-width: 1060px) {
    overflow-x: scroll;
  }
  @media (max-width: 600px) {
    margin-bottom: 40px;
  }
  .white {
    color: #fff;
  }
  .heading {
    text-align: center;
    max-width: 434px;
    margin: 0 auto;
    margin-bottom: 6rem;
    line-height: 55px;
    @media (max-width: 600px) {
      text-align: left;
      font-size: 32px;
    }
  }
  table {
    padding: 0 1.5rem;
    width: 100%;
    border-collapse: separate;
    border-spacing: 15px 0;
    td {
      // border-bottom: 1px solid #060606;
    }
  }
  tr {
    transition: all 0.3s ease;
    &:hover {
      background-color: #fff;
      color: #000;
      .white {
        color: #000;
        border: none !important;
      }
      td:nth-child(4) {
        border: none !important;
      }
    }
  }
  th {
    text-align: left;
    padding-left: 3rem;
    padding-bottom: 2rem;
    padding-top: 1rem;
  }
  td.left {
    text-align: left;
    padding: 8px;
    font-size: 12px;
  }
  td {
    text-align: center;
    padding: 8px;
    font-size: 14px;
  }
  /* td:nth-child(even) {
    background-color: rgba(165, 165, 189, 0.3);
  } */

  th {
    p {
      margin-bottom: 0.5rem;
    }
    h3 {
      color: #262525;
      margin: 0;
      small {
        margin: 0;
        font-size: 14px;
        color: #262525;
      }
    }
  }
  .th1 {
    margin: 0;
    padding-bottom: 0rem;
  }
  .additional {
    margin-top: 0.5rem;
    margin-left: -3rem;
    img {
      height: 120px;
    }
  }
  .plan {
    position: relative;
    margin-top: -6rem;
    margin-left: -3rem;
    // ::before {
    //   content: '';
    //   position: absolute;
    //   top: 50%;
    //   right: 0%;
    //   transform: translateY(-50%);
    //   background-color: #262525;
    //   height: 2px;
    //   width: 56px;
    //   @media (max-width: 1200px) {
    //     background-color: transparent;
    //   }
    // }
    h3 {
      font-weight: 700;
      color: #262525;
    }
  }
  .recommended {
    height: 47px;
    background-color: #f5bc63;
    color: #fff;
    margin-left: -1.5rem;
    margin-right: 1.5rem;
    font-size: 14px;
    display: flex;
    font-weight: 500;
    align-items: center;
    justify-content: center;
    margin-top: -4rem;
    margin-bottom: 1rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .btn {
    margin-bottom: 0.5rem;
  }
  .plan-btn {
    height: 46px;
    width: 164px;
    background-color: transparent;
    color: #222;
    box-shadow: none;
    border: 1px solid #707070;
    font-size: 14px;
  }
  .recomand-plan {
    background: #33b864;
    color: #fff;
  }
  .black-btn {
    background: #000000;
    color: #fff;
  }
`;
export default PricingWrapper;
