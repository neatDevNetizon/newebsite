import React from "react";
import styled from "styled-components";
import aboutImg from "./../../images/about-img.png";
import Image from "next/image";
const AboutUsTop = () => {
    return (
        <Wrapper className="section">
            <div className = "hide-title">
                <h3>
                    About Us
                </h3>
            </div>
            <div className="image image-show">
                <Image src={aboutImg} alt="" />
            </div>
            <div className="container">
                <div className="text">
                    <h3 className="about-title">About Us</h3>
                    <p className="content">
                        TeliportMe is a technology company that focuses on
                        bringing phenomenally talented technologists, product
                        designers and storytellers together to build products
                        that help inspire and connect people to the world and
                        each other. The tools and spaces we build are at the
                        intersection of mobile photography, image processing and
                        travel aiming to create a world of good.
                    </p>
                    <p>
                        Founded in May 2010, we launched Panorama360 on Android
                        with a focus on capturing and sharing immersive content
                        of a place using your smart phone. Today we are the
                        largest community with over 7Million explorers who have
                        captured and shared 360 degree immersive panoramic
                        content in over 120 countries including the world&apos;s
                        remote places like Antarctica, the Arctic region, the
                        Amazon jungle and Iceland. Panorama360 has enabled
                        TeliportMe to become the second largest mobile first
                        travel community in the world.
                    </p>
                </div>
            </div>
            <div className="image image-hidden">
                <Image src={aboutImg} alt="" />
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    display: grid;
    margin-top: 50px;
    margin-bottom: 20px;
    align-items: center;
    @media (min-width: 1100px) {
        grid-template-columns: 1fr 1fr;
        margin-bottom: 100px;
        gap: 2rem;
        margin-top: 200px;
    }
    .hide-title {
        display: none;
        @media(max-width: 1100px) {
            display: block;
        }
        h3 {
            font-size: 38px;
        }
    }
    .about-title {
        @media(max-width: 1100px) {
            display: none;
        }
    }
    .image-hidden {
        display: none !important;
        @media (max-width: 1100px){
            display: block !important;
            margin-top: 15px;
        }
    }
    .image-show {
        @media (max-width: 1100px){
            display: none !important;
        }
    }

    .image {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
            width: 100%;
        }
        .about-btn {
            padding: 1rem 3rem;
            background-color: #33b864;
            margin-top: 55px;
            @media (max-width: 600px) {
                padding: 0.8rem 1.5rem;
                font-size: 12px;
            }
        }
    }
    .container {
        min-height: 633px;
        display: block;
        @media (min-width: 1100px) {
            position: relative;
        }
    }
    .text {
        color: #6b7280;
        background-color: #fff;
        box-shadow: var(--shadow-2);
        border-radius: 10px;
        width: 95%;
        padding: 2.5rem;
        z-index: 9999;
        @media (min-width: 1100px) {
            position: absolute;
            top: 10%;
            left: -10%;
        }
        @media (max-width: 1100px) {
            width: 100%;
        }
    }
    .content {
        margin-bottom: 65px;
    }
`;
export default AboutUsTop;
