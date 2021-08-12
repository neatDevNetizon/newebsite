import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.png";
import signUp from "../../images/sign-up.png";
import additional from "../../images/addtional.png";
import Image from "next/image";
import Link from "next/link";
const SignUpWrapper = () => {
    return (
        <Wrapper>
            <div className="left">
                <div className="heading">
                    <div className="logo">
                        <Link href="/" passHref>
                            <Image src={logo} alt="" />
                        </Link>
                    </div>
                    <p>
                        <Link href="/">Go back to HomePage</Link>
                    </p>
                </div>

                <div className="btn-container mobile-signup">
                    <Link href="sign-in" passHref>
                        <button className="btn signup-btn">Go Sign In</button>
                    </Link>
                </div>

                <div className="dots">
                    <Image src={additional} alt="" />
                </div>
                <form className="form">
                    <h4>Getting Started</h4>
                    <div className="container">
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input
                            type="password"
                            placeholder="Re-enter Password"
                        />
                        <button type="submit" className="btn create-btn">
                            Create Account
                        </button>
                        <p className="body2">
                            By registering with us you agree with our terms and
                            privacy policy.
                        </p>
                    </div>
                </form>
            </div>
            <div className="image">
                <Image src={signUp} alt="" />
                <div className="btn-container">
                    <Link href="sign-in" passHref>
                        <button className="btn signup-btn">Sign In</button>
                    </Link>
                </div>
                <button className="btn facebook-btn">
                    Continue with Facebook
                </button>
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.section`
    min-height: 768px;
    display: grid;

    @media (min-width: 1100px) {
        grid-template-columns: 580px 1fr;
    }
    .left {
        position: relative;
        width: 95vw;
        max-width: 480px;
        margin: 0 auto;
        padding: 2rem 0;
    }
    .heading {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        p {
            margin: 0;
            a {
                color: #262525;
            }
        }
    }
    .image {
        position: relative;
        min-height: 768px;
        ::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: #f9dd9e;
            opacity: 0.6;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .btn-container {
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 10;
    }
    .mobile-signup {
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        display: none;
        @media (max-width: 1099px) {
            display: block;
        }
        @media (min-width: 500px) {
            top: 35px;
            right: 100%;
            margin-left: 2rem;
        }
    }
    .signup-btn {
        height: 46px;
        width: 116px;
        background: #fff;
        color: #222;
        @media (max-width: 1099px) {
            color: #fff;
            background: #222;
            font-size: 12px;
            height: 40px;
        }
    }
    .dots {
        position: absolute;
        top: 75%;
        left: 10%;
        z-index: 9;
        @media (max-width: 1100px) {
            display: none;
        }
    }

    .form {
        @media (min-width: 1100px) {
            position: absolute;
            top: 10%;
            left: 20%;
            background: #fff;
            min-height: 550px;
            max-width: 542px;
            z-index: 10;
        }
        h4 {
            margin-bottom: 70px;
        }
        .container {
        }
        input {
            display: block;
            width: 90%;
            margin-bottom: 45px;
            border: none;
            border-bottom: 1px solid #565658;
            padding: 1rem;
            ::placeholder {
                letter-spacing: 2px;
                font-family: "Spartan";
            }
        }

        .create-btn {
            height: 46px;
            width: 239px;
            background-color: #33b864;
            margin-bottom: 1rem;
            @media (max-width: 600px) {
                margin-left: -1rem;
            }
        }

        .or {
            position: relative;
            ::before {
                content: "";
                position: absolute;
                top: 50%;
                left: -80px;
                height: 2px;
                width: 56px;
                transform: translateY(-50%);
                background-color: #262525;
            }
            ::after {
                content: "";
                position: absolute;
                top: 50%;
                right: -80px;
                height: 2px;
                width: 56px;
                transform: translateY(-50%);
                background-color: #262525;
            }

            p {
                font-weight: 700;
                margin: 0;
            }
        }
    }
    .facebook-btn {
        position: absolute;
        right: 10%;
        bottom: 10%;
        z-index: 10;
        height: 46px;
        width: 274px;
        background-color: #222;
        color: #fff;
        font-size: 14px;
        @media (max-width: 1099px) {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
`;
export default SignUpWrapper;
