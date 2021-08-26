import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../images/logo.png";
import signIn from "../../images/sign-in.png";
import signUp from "../../images/sign-up.png";
import additional from "../../images/addtional.png";
import Link from "next/link";
const SignInWrapper = () => {
  return (
    <>
      <Navbar>
          <div className="heading">
            <div className="logo">
              <Link href="/" passHref>
                <div className="logo-cont">
                  <Image src={logo} alt="aaa"></Image>
                  <div className="mobile-logo">teliportme</div>
                </div>
              </Link>
            </div>
          </div>
          <div >
            <Link href="sign-in" passHref>
                <button className="btn signup-btn">Go Sign In</button>
            </Link>
          </div>
        </Navbar>
      <Wrapper>
        <div className="image">
          <Image src={signUp} alt="" />
        </div>
        <div className="left">
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
                <div className="or">
                    <p className="body1">OR</p>
                </div>
                <button className="btn google-btn">Continue with Google</button>
                <button className="btn facebook-btn">Continue with Facebook</button>
                <p className="body2 terms">
                    By registering with us you agree with our terms and
                    privacy policy.
                </p>
            </div>
          </form>
        </div>
        
      </Wrapper>
    </>
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
    width: 100%;
    margin: 0 auto;
    padding: 2rem 0;
  }
  
  .image {
    display: none;
    position: relative;
    padding-top: 100px;
    min-height: 768px;
    @media (min-width: 1100px) {
      display: block;
    }
    ::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      height: 100vh;
      width: 140%;
      background-color: #f9dd9e;
      opacity: 0.6;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: right;

    }
  }
  .btn-container {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 10;
  }
  
  .dots {
    position: absolute;
    top: 60%;
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
        .terms {
            margin-top: 20px;
        }
    }
    input {
        display: block;
        width: 90%;
        margin-bottom: 20px;
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

    .google-btn {
        height: 46px;
        width: 274px;
        background-color: #222;
        color: #fff;
        margin: 1rem 0;
        font-size: 14px;
    }
      .facebook-btn {
        height: 46px;
        width: 274px;
        background-color: #222;
        color: #fff;
        font-size: 14px;
      }
      .or {
        position: relative;
        width: fit-content;
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
`;
const Navbar = styled.section`
  width: 100%;
  position: fixed;
  z-index: 100;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 20px;
  @media(max-width: 600px) {
    box-shadow: 2px 1px 6px #2e2e2eab;
    background: #fff !important;
    background-color: #fff;
  }
  .heading {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    p {
      margin: 0;
      a {
        color: #262525;
      }
    }
    .logo {
      z-index: 9;
      cursor: pointer;
      img {
        // max-width: 250px;
      }
    }
    .logo-cont {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      div {
        margin-top: auto;
        font-size: 22px;
        font-weight: 800;
        text-transform: uppercase;
      }
    }
  }
  .mobile-logo {
        @media (max-width: 600px) {
            display: none;
        }
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
`
export default SignInWrapper;
