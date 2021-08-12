import React from "react";
import styled from "styled-components";
import dot from "./../../images/Ellipse.png";
import Image from "next/image";
const Story = () => {
    return (
        <Wrapper className="section">
            <div className="title">
                <h3>Our Story</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
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
        </Wrapper>
    );
};
const Wrapper = styled.div`
    .title {
        text-align: center;
        margin-bottom: 80px;
    }
    .single {
        max-width: 1009px;
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
`;
export default Story;
