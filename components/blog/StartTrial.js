import React from "react";
import styled from "styled-components";
import blogTrial from "./../../images/blog-trial.png";
import Image from "next/image";
const StartTrial = () => {
    return (
        <Wrapper>
            <div className="section">
                <div className="image-container">
                    <div className="image">
                        <Image src={blogTrial} alt="" />
                    </div>
                </div>
                <div className="content">
                    <h3>
                        Join Millions Of <br /> 360 Virtual Tour Creators
                    </h3>
                    <p>
                        P360 is a strong community of over 15 million creators
                        around the world in over 180 countries. Best-in-class
                        tools combined with an infinte creative canvas means
                        that we are our home to the world&apos;s best 360
                        professionals that for your immersive inspiration.
                    </p>
                    <button className="btn trial-btn">Start Free Trial</button>
                </div>
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.section`
    padding: 1rem;
    background-color: #ffe8b9;
    min-height: 470px;
    margin-top: 250px;

    margin-bottom: 125px;
    @media (max-width: 1060px) {
        margin-top: 30px;
        margin-bottom: 50px;
    }
    .section {
        min-height: 470px;
        display: grid;
        gap: 2rem;
        align-items: center;
        justify-content: space-around;
        @media (min-width: 1000px) {
            grid-template-columns: 1fr 1fr;
        }
    }
    .image-container {
        @media (min-width: 1000px) {
            position: relative;
            min-height: 470px;
        }
        .image {
            width: 100%;
            @media (min-width: 1000px) {
                position: absolute;
                top: -20%;
                left: 50%;
                transform: translateX(-50%);
                width: 65%;
            }
            img {
                width: 100%;
            }
        }
    }
    .content {
        h3 {
            line-height: 55px;
        }
        .trial-btn {
            height: 46px;
            width: 239px;
            background-color: #262525;
            color: #fff;
            margin-top: 55px;
        }
    }
`;
export default StartTrial;
