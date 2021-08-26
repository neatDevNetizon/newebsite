import React from "react";
import styled from "styled-components";
import dot from "./../../images/Ellipse.png";
import Image from "next/image";
import c23 from '../../images/c23.png';
const Story = () => {
    return (
        <Wrapper className="section">
            <div className="title">
                <h3>Our Story</h3>
                <p>Hi, I’m Vineet Devaiah. I’m an entrepreneur, engineer, and the founder of TeliportMe.</p>
                <Image src={c23} className="story-image"/>
            </div>
            <div className="container">
                <div className="single">
                    <div className="heading">
                        <Image
                            src={dot}
                            layout="fixed"
                            width={16}
                            height={16}
                            alt=""
                        />
                        <h4>2011</h4>
                        <div className="left"></div>
                    </div>

                    <div className="content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla mattis a nulla ac tincidunt. Integer id
                            tincidunt elit. Ut faucibus, mauris quis auctor
                            mattis, risus lacus eleifend dolor, sed laoreet sem
                            urna at ipsum primis in faucibus orci luctus et
                            ultrices ligula.
                        </p>
                    </div>
                </div>

                <div className="single">
                    <div className="heading">
                        <Image
                            src={dot}
                            layout="fixed"
                            width={16}
                            height={16}
                            alt=""
                        />
                        <h4>2011</h4>
                        <div className="left"></div>
                    </div>
                    <div className="content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla mattis a nulla ac tincidunt. Integer id
                            tincidunt elit. Ut faucibus, mauris quis auctor
                            mattis, risus lacus eleifend dolor, sed laoreet sem
                            urna at ipsum primis in faucibus orci luctus et
                            ultrices ligula.
                        </p>
                    </div>
                </div>

                <div className="single">
                    <div className="heading">
                        <Image
                            src={dot}
                            layout="fixed"
                            width={16}
                            height={16}
                            alt=""
                        />
                        <h4>2011</h4>
                        <div className="left"></div>
                    </div>
                    <div className="content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla mattis a nulla ac tincidunt. Integer id
                            tincidunt elit. Ut faucibus, mauris quis auctor
                            mattis, risus lacus eleifend dolor, sed laoreet sem
                            urna at ipsum primis in faucibus orci luctus et
                            ultrices ligula.
                        </p>
                    </div>
                </div>

                <div className="single">
                    <div className="heading">
                        <Image
                            src={dot}
                            layout="fixed"
                            width={16}
                            height={16}
                            alt=""
                        />
                        <h4>2011</h4>
                        <div className="left"></div>
                    </div>
                    <div className="content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla mattis a nulla ac tincidunt. Integer id
                            tincidunt elit. Ut faucibus, mauris quis auctor
                            mattis, risus lacus eleifend dolor, sed laoreet sem
                            urna at ipsum primis in faucibus orci luctus et
                            ultrices ligula.
                        </p>
                    </div>
                </div>

                <div className="single">
                    <div className="heading">
                        <Image
                            src={dot}
                            layout="fixed"
                            width={16}
                            height={16}
                            alt=""
                        />
                        <h4>2011</h4>
                    </div>
                    <div className="content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla mattis a nulla ac tincidunt. Integer id
                            tincidunt elit. Ut faucibus, mauris quis auctor
                            mattis, risus lacus eleifend dolor, sed laoreet sem
                            urna at ipsum primis in faucibus orci luctus et
                            ultrices ligula.
                        </p>
                    </div>
                </div>
            </div>
            <div className="blank-container">
                <div className="blank-square">
                    <div className='blank-single'>
                        <div className="content"></div>
                    </div>
                    <div className='blank-single'>
                        <div className="content"></div>
                    </div>
                    <div className='blank-single'>
                        <div className="content"></div>
                    </div>
                    <div className='blank-single'>
                        <div className="content"></div>
                    </div>
                    <div className='blank-single'>
                        <div className="content"></div>
                    </div>
                    <div className='blank-single'>
                        <div className="content"></div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    .title {
        div {
            width: 100%;
        }
        margin-bottom: 80px;
        .story-image {
            width: 100%;
            
        }
        img {
            width: 100% !important;
            height: 500px;
            object-fit: cover;
            border-radius: 10px;
        }
        p {
            font-size: 20px;
        }
        h3 {
            font-size: 48px;
        }
    }
    .single {
        max-width: 1109px;
        margin: 0 auto;
        margin-bottom: 80px;
        display: flex;
        gap: 1rem 76px;
        align-items: flex-start;
        @media (max-width: 960px) {
            flex-wrap: wrap;
            margin-bottom: 20px;
        }
        .heading {
            display: flex;
            align-items: center;
            gap: 3rem;
            position: relative;

            h4 {
                margin: 0;
                color: #fad096;
            }
        }
        .left {
            position: absolute;
            top: 83%;
            left: 4%;
            height: 160px;
            width: 5px;
            background-color: #e4e4eb;
            @media (max-width: 960px) {
                display: none;
            }
        }
        .content {
            p {
                margin-top: 0;
            }
        }
    }
    .blank-container {
        padding-bottom: 100px;
    }
    .blank-square {
        margin-bottom: 37px;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 2rem;
        flex-wrap: wrap;
        @media (max-width: 955px) {
            justify-content: space-around;
        }
        @media (max-width: 600px) {
            margin-top: 40px;
        }
        .blank-single {
            .content {
                width: 320px;
                height: 300px;
                background-color: #6B7280;
                border: 1px solid #707070;
            }
        }
    }
`;
export default Story;
