import React, {useEffect} from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import check from './../../images/check.png';
import uncheck from './../../images/uncheck1.png';
import uncheck2 from './../../images/uncheck.png';
import additional from '../../images/addtional.png';
import Image from 'next/image';
const PricingWrapper = () => {
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
          <td className='left'>
            <a data-tip data-for='tooltip-1'>Maximum Panorama Size</a>
            <ReactTooltip id='tooltip-1' aria-haspopup='true' place="bottom">
              <p>Maximum Panorama Size</p>
              <label>You can customize this</label>
            </ReactTooltip>
          </td>
          <td>20mb</td>
          <td>30mb</td>
          <td className='white'>50mb</td>
          <td>100mb</td>
        </tr>
        <tr>
          <td className='left'>
            <a data-tip data-for='tooltip-2'>iOS and Android app</a>
            <ReactTooltip id='tooltip-2' aria-haspopup='true' place="bottom">
              <p>iOS and Android app</p>
              <label>You can customize this</label>
            </ReactTooltip>
          </td>
          <td>Free version</td>
          <td>PRO versions</td>
          <td className='white'>PRO versions</td>
          <td>PRO versions</td>
        </tr>
        <tr>
          <td className='left'>
            <a data-tip data-for='tooltip-3'>Embed Functionality</a>
            <ReactTooltip id='tooltip-3' aria-haspopup='true' place="bottom">
              <p>Embed Functionality</p>
              <label>You can customize this</label>
            </ReactTooltip>
          </td>
          <td>Unlimited</td>
          <td>Unlimited</td>
          <td className='white'>Unlimited</td>
          <td>Unlimited</td>
        </tr>
        <tr>
          <td className='left'>
            <a data-tip data-for='tooltip-4'>360 Camera Integration</a>
            <ReactTooltip id='tooltip-4' aria-haspopup='true' place="bottom">
              <p>360 Camera Integration</p>
              <label>You can customize this</label>
            </ReactTooltip>
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
          <td>
            <Image src={check} alt='' />
          </td>
        </tr>
        <tr>
          <td className='left'>
            <a data-tip data-for='tooltip-5'>Video Resolution</a>
            <ReactTooltip id='tooltip-5' aria-haspopup='true' place="bottom">
              <p>Video Resolution</p>
              <label>You can customize this</label>
            </ReactTooltip>
          </td>
          <td>4K</td>
          <td>8K</td>
          <td className='white'>16K</td>
          <td>Upto 32K</td>
        </tr>
        <tr>
          <td className='left'>
            <a data-tip data-for='tooltip-6'>Custom Branding</a>
            <ReactTooltip id='tooltip-6' aria-haspopup='true' place="bottom">
              <p>Custom Branding</p>
              <label>You can customize this</label>
            </ReactTooltip>
          </td>
          <td>
            <Image src={uncheck} alt='' />
          </td>
          <td>1 Brand</td>
          <td className='white'>15 Brands</td>
          <td>50 Brands</td>
        </tr>
        <tr>
          <td className='left'>
            <a data-tip data-for='tooltip-7'>Live Tours / Collections</a>
            <ReactTooltip id='tooltip-7' aria-haspopup='true' place="bottom">
              <p>Live Tours / Collections</p>
              <label>You can customize this</label>
            </ReactTooltip>
          </td>
          <td>
            <Image src={uncheck} alt='' />
          </td>
          <td>25</td>
          <td className='white'>50</td>
          <td>Unlimited</td>
        </tr>

        <tr>
          <td className='left'>
            <a data-tip data-for='tooltip-8'>Private and unlisted</a>
            <ReactTooltip id='tooltip-8' aria-haspopup='true' place="bottom">
              <p>Private and unlisted</p>
              <label>You can customize this</label>
            </ReactTooltip>
          </td>
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
          <td className='left'>
            <a data-tip data-for='tooltip-9'>Number of Users</a>
            <ReactTooltip id='tooltip-9' aria-haspopup='true' place="bottom">
              <p>Number of Users</p>
              <label>You can customize this</label>
            </ReactTooltip>
          </td>
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
          <td className='left'>
            <a data-tip data-for='tooltip-10'>Basic API integration</a>
            <ReactTooltip id='tooltip-10' aria-haspopup='true' place="bottom">
              <p>Basic API integration</p>
              <label>You can customize this</label>
            </ReactTooltip>
          </td>
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
          <td className='left'>
            <a data-tip data-for='tooltip-11'>Custom domain with SSL</a>
            <ReactTooltip id='tooltip-11' aria-haspopup='true' place="bottom">
              <p>Custom domain with SSL</p>
              <label>You can customize this</label>
            </ReactTooltip>
          </td>
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
          <td className='left'>
            <a data-tip data-for='tooltip-12'>Detailed Analytics</a>
            <ReactTooltip id='tooltip-12' aria-haspopup='true' place="bottom">
              <p>Detailed Analytics</p>
              <label>You can customize this</label>
            </ReactTooltip>
          </td>
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
  tr th:nth-child(4){
    border: 3px solid #f5bc63;
    border-bottom: none;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  tr td:nth-child(4) {
    border-left: 3px solid #f5bc63;
    border-right: 3px solid #f5bc63;
  }
  
  tr .left:hover {
    cursor: pointer;
  }
  tr:not(:nth-child(2)):not(:last-child){
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
  tr:last-child{
    transition: all 0.3s ease;
    &:hover {
      color: #000;
      .white {
        color: #000;
        border: none !important;
      }
    }
  }
  tr:last-child td:nth-child(4) {
    border-bottom: 3px solid #f5bc63;
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
    background-color: #fff;
    color: #222;
    box-shadow: none;
    border: 1px solid #707070;
    font-size: 14px;
    position: relative;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    transition: 0.3s ease;
    &:hover {
      :after {
        width: 100%;
        content: '';
        height: 3px;
        position: absolute;
        bottom: 5px;
        left: 0;
        background-color: #707070;
      }
    }
    @media (max-width: 600px) {
      width: 160px;
      height: 46px;
    }
  }
  .recomand-plan {
    background: #33b864;
    color: #fff;
    &:hover {
      :after {
        width: 100%;
        content: '';
        height: 3px;
        position: absolute;
        bottom: 5px;
        left: 0;
        background-color: #fff;
      }
    }
    @media (max-width: 600px) {
      width: 160px;
      height: 46px;
    }
  }
  .black-btn {
    background: #000000;
    color: #fff;
    &:hover {
      :after {
        width: 100%;
        content: '';
        height: 3px;
        position: absolute;
        bottom: 5px;
        left: 0;
        background-color:  #fff;
      }
    }
    @media (max-width: 600px) {
      width: 160px;
      height: 46px;
    }
  }
`;
export default PricingWrapper;
