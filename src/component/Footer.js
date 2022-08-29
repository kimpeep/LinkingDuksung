import React from "react";
import "../css/Footer.css";
import logo from "../img/logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <img alt="로고 아이콘" src={logo} width="100px" height="100px" />
        <p>© 2022. Data Crossing all rights reserved.</p>
        <p className="footer-text">
          Data Crossing <br /> created by PeeP, Poro, NOEY, Dori, SEOL
        </p>
      </div>{" "}
    </>
  );
};

export default Footer;
