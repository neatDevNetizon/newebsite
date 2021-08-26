import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../images/logo.png";
import signIn from "../../images/sign-in.png";
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
                  <div>teliportme</div>
                </div>
              </Link>
            </div>
          </div>
{/* 
          <div className="btn-container mobile-signup">
            <Link href="sign-up" passHref>
              <button className="btn signup-btn">Go Sign Up</button>
            </Link>
          </div> */}

          <div >
            <Link href="sign-up" passHref>
              <button className="btn signup-btn">Sign Up</button>
            </Link>
          </div>
        </Navbar>
      <Wrapper>
        <div className="image">
          <Image src={signIn} alt="" />
        </div>
        <div className="left">
          <div className="dots">
            <Image src={additional} alt="" />
          </div>
          <form className="form">
            <h4>Welcome Back</h4>
            <div className="container">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit" className="btn login-btn">
                Login
              </button>
              <div className="or">
                <p className="body1">OR</p>
              </div>
              <button className="btn google-btn">Continue with Google</button>
              <button className="btn facebook-btn">Continue with Facebook</button>
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
      min-height: 600px;
      max-width: 542px;
      z-index: 10;
    }
    h4 {
      margin-bottom: 70px;
    }
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      flex-direction: column;
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

    .login-btn {
      height: 46px;
      width: 181px;
      background-color: #33b864;
      margin-bottom: 1rem;
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
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 20px;
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
