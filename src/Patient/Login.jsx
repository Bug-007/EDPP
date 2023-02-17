import React from "react";
import "./Login.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";

const Login = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <img src="/assets/complogo.png" alt="logo" className="logo-img" />
        </div>
        <div className="signup">
          <button className="signup-button"> Sign Up </button>
        </div>
      </nav>

      <div className="login-container">
        <div className="login-field-container">
          <span className="login-title">Patient Login</span>
          <p className="login-text">
            Login to your centerally managed medical history records.
          </p>
          <div className="login-email">
            <input
              type="text"
              placeholder="Enter Email"
              className="login-input"
            />
            <AccountCircleOutlinedIcon />
          </div>
          <div className="login-password">
            <input
              type="text"
              placeholder="Enter Password"
              className="login-input"
            />
            <HttpsRoundedIcon />
          </div>

          <p className="login-prob-text">Trouble loging in ?</p>
          <button type="submit" className="login-button">
            {" "}
            Login{" "}
          </button>
          <div className="other-login-option">
            <button className="google-opt">
              <GoogleIcon />
              <span className="google-text">Google</span>
            </button>
            <button className="apple-opt">
              <AppleIcon />
              <span className="apple-text">Apple</span>
            </button>
            <button className="fb-opt">
              <FacebookIcon />
              <span className="fb-text">Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
